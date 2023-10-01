import React from 'react';
import { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
type Props = {};

const MultiFilter = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const filterDom = useRef<HTMLUListElement | null>(null);

  const [isContentsShowed, setIsContentsShowed] = useState(false);
  const [clickedCategory, setClickedCategory] = useState(Number);

  const [clickedCheckList, setClickedCheckList] = useState<
    { id: number; content: string; sortType: string }[]
  >([]);

  const handleCheckList = (
    e: any,
    content: string,
    idx: number,
    sort_type: string,
  ) => {
    e.target.checked
      ? setClickedCheckList([
          ...clickedCheckList,
          { id: idx, content, sortType: sort_type },
        ])
      : setClickedCheckList(
          clickedCheckList.filter((list) => list.content !== content),
        );
  };
  useOutsideClick(filterDom, () => setIsContentsShowed(false));

  return (
    <Wrapper>
      <FilterList ref={filterDom}>
        {FILTER_CATEGORYS.map(({ sort_type, title, contents }, idx) => {
          if (sort_type === 'teams') {
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
                      onClick={(e: any) =>
                        handleCheckList(e, content, idx, sort_type)
                      }
                    >
                      <TeamLabel>
                        <TeamLogo src={content} alt='팀로고' />
                        <input type='checkbox' />
                      </TeamLabel>
                    </TeamContent>
                  ))}
                  <Btns>
                    <Button>필터 적용</Button>
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
                      onClick={(e: any) =>
                        handleCheckList(e, content, idx, sort_type)
                      }
                    >
                      <Label>
                        <input type='checkbox' />
                        {content}
                      </Label>
                    </Content>
                  ))}
                  <Btns>
                    <Button>필터 적용</Button>
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
                  <CustomDatePicker
                    dateFormat='yyyy.MM.dd' // 날짜 형태
                    shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                    minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
                    maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date as Date | null)} // 'as' 연산자를 사용하여 형식 맞춤
                  />
                  <Btns>
                    <Button>필터 적용</Button>
                  </Btns>
                </DateContents>
              </Filter>
            );
          }
        })}
      </FilterList>
    </Wrapper>
  );
};
const FILTER_CATEGORYS = [
  {
    sort_type: 'teams',
    title: '구단별',
    contents: [
      'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.png',
      'https://kickstorage.blob.core.windows.net/logo/gwangju_fc.png',
      'https://kickstorage.blob.core.windows.net/logo/daegu_fc.png',
      'https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.png',
      'https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.png',
      'https://kickstorage.blob.core.windows.net/logo/suwon_fc.png',
      'https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.png',
      'https://kickstorage.blob.core.windows.net/logo/incheon_united.png',
      'https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.png',
      'https://kickstorage.blob.core.windows.net/logo/jeju_united.png',
      'https://kickstorage.blob.core.windows.net/logo/pohang_stealus.png',
      'https://kickstorage.blob.core.windows.net/logo/fc_seoul.png',
    ],
  },
  {
    sort_type: 'recruit',
    title: '모집 여부',
    contents: ['모집중', '마감임박', '모집마감'],
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
`;
const FilterList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Filter = styled.li`
  position: relative;
`;
const Title = styled.div`
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  cursor: pointer;

  &:hover,
  &.show {
    background-color: #e6e9ed;
  }
`;
const Contents = styled.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 37px;
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
  top: 37px;
  left: 5px;
  width: 240px;
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
  top: 37px;
  left: 5px;
  width: 500px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 3개의 열로 그리드 설정 */
    grid-gap: 10px; /* 열 사이의 간격 설정 */
    justify-content: flex-start;
    align-items: center;
  }
`;
const Content = styled.div`
  margin: 10px 0;
  cursor: pointer;
`;
const TeamContent = styled.div`
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
`;
const TeamLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border: 1px solid black;
  padding: 10px 5px;
  border-radius: 12px;
`;
const Label = styled.label`
  display: flex;
  gap: 10px;
`;
const TeamLogo = styled.img`
  height: 40px;
`;
const Btns = styled.div`
  grid-column: span 2;
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
  align-items: center;
  border: 1px solid gray;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  text-align: center;
`;
export default MultiFilter;
