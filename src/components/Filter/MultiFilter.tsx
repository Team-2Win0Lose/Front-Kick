import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCookie } from '@/util/cookieFn';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import AccompanyBox from '../MyAccompany/AccompanyBox';
import { AccompanyPost } from '@/lib/interface';
const token = getCookie('token');
const headers = {
  Authorization: `Bearer ${token}`,
};
type Props = {};

const MultiFilter = (props: Props) => {
  const id = `id=${useSelector((state: RootState) => state.auth.id)}`;

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [cardList, setCardList] = useState<[]>();
  const navigate = useNavigate();
  const { search } = useLocation();

  const filterDom = useRef<HTMLUListElement | null>(null);
  const [nowRecruitState, setnowRecruitState] = useState<boolean>();
  const [isContentsShowed, setIsContentsShowed] = useState(false);
  const [clickedCategory, setClickedCategory] = useState(Number);
  const [isSelectedTeam, setisSelectedTeam] = useState<string[]>([]);
  const [clickedCheckList, setClickedCheckList] = useState<
    { id: number; content: string; sort_type: string }[]
  >([]);
  const appendTeam = (team: string) => {
    const isTeamSelected = isSelectedTeam.includes(team);
    if (isTeamSelected) {
      setisSelectedTeam(isSelectedTeam.filter((item) => item !== team));
    } else {
      setisSelectedTeam([...isSelectedTeam, team]);
    }
  };
  const handleCheckList = (id: number, content: string, sort_type: string) => {
    const index = clickedCheckList.findIndex(
      (item) => item.content === content,
    );
    if (index !== -1) {
      // 이미 있으면 해당 항목을 제거
      setClickedCheckList((prevCheckList) =>
        prevCheckList.filter((item, idx) => idx !== index),
      );
    } else {
      // 없으면 새 항목을 추가
      setClickedCheckList((prevCheckList) => [
        ...prevCheckList,
        { id, content, sort_type },
      ]);
    }
  };
  useOutsideClick(filterDom, () => setIsContentsShowed(false));
  const getCardListData = useCallback(async () => {
    if (clickedCheckList.length === 0) {
      const res = await fetch(
        `https://kick-back.azurewebsites.net/api/recruitments/?${id}`,
        {
          method: 'GET',
          headers: headers,
        },
      );
      const data = await res.json();
      setCardList(data);
    } else {
      const res = await fetch(
        `https://kick-back.azurewebsites.net/api/recruitments/?${id}${search}`,
        {
          method: 'GET',
          headers: headers,
        },
      );
      const data = await res.json();
      setCardList(data);
    }
  }, []);

  useEffect(() => {
    getCardListData();
  }, []);
  console.log(cardList);

  const makeQueryString = () => {
    const queryString = clickedCheckList
      .map(({ id, sort_type }) => {
        if (sort_type === 'home_team') {
          return `${sort_type}_id=${id + 1}`;
        } else if (sort_type === 'recruit') {
          return `now_status=${nowRecruitState}`;
        }
      })
      .map((item) => {
        return '&' + item;
      })
      .join('');

    navigate(`?${queryString}`);
  };

  return (
    <Wrapper>
      <FilterList ref={filterDom}>
        {FILTER_CATEGORYS.map(({ sort_type, title, contents }, idx) => {
          if (sort_type === 'home_team') {
            return (
              <Filter key={idx}>
                <Title
                  className={clickedCategory === idx ? 'show' : 'hide'}
                  onClick={() => {
                    setClickedCategory(idx);
                    setIsContentsShowed(true);
                  }}
                >
                  {title}
                </Title>
                <TeamContents
                  className={
                    clickedCategory === idx && isContentsShowed
                      ? 'show'
                      : 'hide'
                  }
                >
                  {contents.map((content, idx) => (
                    <TeamContent
                      key={idx}
                      onClick={() =>
                        handleCheckList(idx, content[1], sort_type)
                      }
                    >
                      <TeamLabel
                        isSelected={isSelectedTeam.includes(content[1])}
                        onClick={() => appendTeam(content[1])}
                      >
                        <TeamLogo src={content[0]} alt='팀로고' />
                        {/* <input type='checkbox' /> */}
                      </TeamLabel>
                    </TeamContent>
                  ))}
                  <Btns>
                    <Button
                      onClick={() => {
                        makeQueryString();
                        setIsContentsShowed(false);
                      }}
                    >
                      필터 적용
                    </Button>
                  </Btns>
                </TeamContents>
              </Filter>
            );
          } else if (sort_type === 'recruit') {
            return (
              <Filter key={idx}>
                <Title
                  className={clickedCategory === idx ? 'show' : 'hide'}
                  onClick={() => {
                    setClickedCategory(idx);
                    setIsContentsShowed(true);
                  }}
                >
                  {title}
                </Title>
                <Contents
                  className={
                    clickedCategory === idx && isContentsShowed
                      ? 'show'
                      : 'hide'
                  }
                >
                  {contents.map((content, idx) => (
                    <Content
                      key={idx}
                      onClick={() =>
                        setnowRecruitState(content[1] === '모집중')
                      }
                    >
                      <Label>
                        <input type='checkbox' />
                        {content}
                      </Label>
                    </Content>
                  ))}
                  <Btns>
                    <Button
                      onClick={() => {
                        makeQueryString(), setIsContentsShowed(false);
                      }}
                    >
                      필터 적용
                    </Button>
                  </Btns>
                </Contents>
              </Filter>
            );
          } else if (sort_type === 'date') {
            return (
              <Filter key={idx}>
                <Title
                  className={clickedCategory === idx ? 'show' : 'hide'}
                  onClick={() => {
                    setClickedCategory(idx);
                    setIsContentsShowed(true);
                  }}
                >
                  {title}
                </Title>
                <DateContents
                  className={
                    clickedCategory === idx && isContentsShowed
                      ? 'show'
                      : 'hide'
                  }
                >
                  {/* <CustomDatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                      if (Array.isArray(update)) {
                        // update가 배열인 경우 startDate와 endDate로 분리하여 전달
                        setDateRange(update);
                      } else {
                        // update가 Date 또는 null인 경우 [update, null] 형식으로 변환하여 전달
                        setDateRange([update, null]);
                      }
                    }}
                    isClearable={true}
                  /> */}
                  <Btns>
                    <Button>필터 적용</Button>
                  </Btns>
                </DateContents>
              </Filter>
            );
          }
        })}
      </FilterList>
      <ListContainer>
        {cardList?.length !== 0 && cardList !== undefined ? (
          cardList?.map((post, idx) => (
            <div
              key={idx}
              // onClick={() => navigate(`/findaccompany/detail/${post.id}`)}
            >
              <AccompanyBox boxdata={post} />
            </div>
          ))
        ) : (
          <div></div>
        )}
      </ListContainer>
    </Wrapper>
  );
};
const FILTER_CATEGORYS = [
  {
    sort_type: 'home_team',
    title: '구단별',
    contents: [
      [
        'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.png',
        '강원FC',
      ],
      [
        'https://kickstorage.blob.core.windows.net/logo/gwangju_fc.png',
        '광주FC',
      ],
      ['https://kickstorage.blob.core.windows.net/logo/daegu_fc.png', '대구FC'],
      [
        'https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.png',
        '대전하나시티즌',
      ],
      [
        'https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.png',
        '수원삼성블루윙즈',
      ],
      ['https://kickstorage.blob.core.windows.net/logo/suwon_fc.png', '수원FC'],
      [
        'https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.png',
        '울산현대',
      ],
      [
        'https://kickstorage.blob.core.windows.net/logo/incheon_united.png',
        '인천유나이티드',
      ],
      [
        'https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.png',
        '전북현대모터스',
      ],
      [
        'https://kickstorage.blob.core.windows.net/logo/jeju_united.png',
        '제주유나이티드',
      ],
      [
        'https://kickstorage.blob.core.windows.net/logo/pohang_stealus.png',
        '포항스틸러스',
      ],
      ['https://kickstorage.blob.core.windows.net/logo/fc_seoul.png', 'FC서울'],
    ],
  },
  {
    sort_type: 'recruit',
    title: '모집 여부',
    contents: [['모집중'], ['모집마감']],
  },
  {
    sort_type: 'date',
    title: '날짜 선택',
    contents: [],
  },
];
const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
const Wrapper = styled.div`
  width: 100%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FilterList = styled.ul`
  display: flex;
`;
const Filter = styled.li`
  position: relative;
`;
const Title = styled.div`
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  cursor: pointer;

  &:hover,
  &.show {
    background-color: #1f1f45;
    color: white;
  }
`;
const Contents = styled.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 45px;
  left: 5px;
  width: 240px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: block;
  }
`;
const DateContents = styled.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 45px;
  left: 5px;
  width: 340px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const TeamContents = styled.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 45px;
  left: 5px;
  /* width: 100%; */
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 3개의 열로 그리드 설정 */
    grid-gap: 5px; /* 열 사이의 간격 설정 */
    justify-content: flex-start;
    align-items: center;
  }
`;
const Content = styled.div`
  margin: 10px 0;
  cursor: pointer;
`;
const TeamContent = styled.div`
  width: 100px;
  /* margin: 5px 0; */
  /* padding: 5px 5px; */
  cursor: pointer;
`;
const TeamLabel = styled.label<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  /* border-bottom: 1px solid #dbdbdb; */
  padding: 10px 5px;
  border-radius: 12px;
  background-color: ${(props) => (props.isSelected ? '#ffcd40' : 'white')};
`;
const Label = styled.label`
  display: flex;
  gap: 10px;
`;
const TeamLogo = styled.img`
  height: 40px;
  pointer-events: none;
`;
const Btns = styled.div`
  grid-column: span 4;
  margin-top: 10px;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid #dbdbdb;
`;

const Button = styled.button`
  background-color: #1f1f45;
  margin: 2px;
  padding: 5px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;
const CustomDatePicker = styled(DatePicker)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 10px 30px;
  width: 250px;
  /* height: 46px; */
  text-align: center;
`;
const ListContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`;
export default MultiFilter;
