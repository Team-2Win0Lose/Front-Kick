import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect, useCallback } from 'react';

import { customMedia } from '@/util/GlobalStyle';
import { teamnameConvertImg } from '@/util/teamnameConvertImg';
const TeamCardCarousel = () => {
  // const [teamList, setteamList] = useState<GetTeamList>();
  const dispatch = useDispatch();

  const [rating, setrating] = useState<
    {
      football_team_id: number;
      original_team_name: string;
      follower: number;
      recruit_ing: number;
      logo_img_url: string;
    }[]
  >([]);
  const ratingList = useCallback(async () => {
    const res = await fetch(
      `https://kick-back.azurewebsites.net/api/team_info/list_detail`,
      {
        method: 'GET',
      },
    );
    const data = await res.json();
    setrating(data);
  }, []);

  useEffect(() => {
    ratingList();
  }, [ratingList]);
  const sortedItems = [...(rating || [])].sort(
    (a, b) => b.recruit_ing - a.recruit_ing,
  );
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    speed: 500,
    prevArrow: <PrevArrow>&#8249;</PrevArrow>,
    nextArrow: <NextArrow>&#8250;</NextArrow>, 
  };

  // // api에서 team 목록 불러오기
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getTeamDetail();
  //       setteamList(response);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const handleOpenSearchModal = () => {
  //   dispatch(
  //     openModal({
  //       modalType: 'TeamCardModal',
  //       isOpen: true,
  //     }),
  //   );
  // };

  return (
    <DIV className='carousel'>
      <CustomSlider {...settings}>
        {sortedItems?.map((item, index) => (
          <Box key={index}>
            <TitleBox>
              <Rate>{index + 1}</Rate>
            </TitleBox>
            <FlexContainer>
              <IMG
                src={teamnameConvertImg(item.original_team_name)}
                alt={item.original_team_name}
              />
              <FlexContainerRight>
                <Name>{item.original_team_name}</Name>
                <FlexColumnInside>
                  <FlexText>
                    <Font>팔로워</Font>
                    <FlexItem>{item.follower}</FlexItem>
                  </FlexText>
                  <FlexText>
                    <Font>현재 동행팀</Font>
                    <FlexItem>{item.recruit_ing}</FlexItem>
                  </FlexText>
                </FlexColumnInside>
                {/* <FilterBtn onClick={handleOpenSearchModal}>
                  <InfoBox>상세정보</InfoBox>
                </FilterBtn> */}
              </FlexContainerRight>
            </FlexContainer>
          </Box>
        ))}
      </CustomSlider>
    </DIV>
  );
};

export default TeamCardCarousel;

const DIV = styled.div`
  padding: 0 30px;
`

const CustomSlider = styled(Slider)`
  .slick-slide {
  }

  .slick-list {
    margin-right: -15px;
  }

  .slick-slide > div {
    margin-right: 40px;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 343px;
  background: #eeeeee;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 20px;
`;

const TitleBox = styled.div`
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  padding: 5px;
  height: 120px;
  background: #1f1f45; /* 원하는 배경색으로 변경하세요 */
  border-radius: 20px 20px 0 0;
  width: 100%;
`;

const Rate = styled.div`
  justify-content: left;
  align-items: left;
  font-size: 50px;
  font-weight: bold;
  padding: 3px;
  color: white;
  ${customMedia.lessThan('mobile')`
		font-size: 30px;
	`}
  @font-face {
    font-family: 'Giants-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/Giants-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`;

const IMG = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  position: absolute; /* 절대 위치 설정 */
  top: 30%; /* 수직 가운데로 배치 */
  left: 50%; /* 수평 가운데로 배치 */
  transform: translate(-50%, -50%);
  ${customMedia.lessThan('mobile')`
		width:100px;
    height:100px;
	`}
`;

const Name = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 5px;
  color: black;
  ${customMedia.lessThan('mobile')`
		font-size: 20px;
	`}
`;

const FlexContainer = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FlexContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const FlexColumnInside = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const FlexItem = styled.div`
  font-size: 20px;
  color: #1f1f45;
`;

const FlexText = styled.div`
  display: flex;
  width: 230px;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
`;

const Font = styled.div`
  font-size: 20px;
  ${customMedia.lessThan('mobile')`
		font-size: 10px;
	`}
`;

const InfoBox = styled.div`
  margin-top: 10px;
  box-sizing: border-box;
  width: 60px;
  height: 24px;
  margin-right: 10px;
  background: #ffffff;
  border: 1px solid #1f1f45;
  text-align: center;
  font-size: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterBtn = styled.div`
  width: 80px;
  height: 29px;
  display: flex;
  border: none;
  border-radius: 12px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`;

const NextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`;

