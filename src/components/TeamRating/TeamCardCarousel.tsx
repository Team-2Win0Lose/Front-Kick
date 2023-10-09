import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { openModal } from 'src/feature/ModalSlice.ts';
import { useState, useEffect } from 'react';
import { GetTeamList } from '@/lib/interface';
import { getTeamDetail } from '@/lib/api';
import { teams } from '@/mocks/dummy';
import { customMedia } from '@/util/GlobalStyle';
const TeamCardCarousel = () => {
  // const [teamList, setteamList] = useState<GetTeamList>();
  const dispatch = useDispatch();
  // const sortedItems = [...(teamList?.data || [])].sort(
  //   (a, b) => b.currentMatching - a.currentMatching,
  // );
  const sortedItems = [...(teams || [])].sort(
    (a, b) => b.currentMatching - a.currentMatching,
  );

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    speed: 500,
    
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
    <div className='carousel'>
      <CustomSlider {...settings} >
        {sortedItems?.map((item, index) => (
          <Box key={index}>
            <TitleBox>
              <Rate>{index + 1}</Rate>
            </TitleBox>
            <FlexContainer>
              <IMG src={item.teamImg} alt={item.teamName} />
              <FlexContainerRight>
                <Name>{item.teamName}</Name>
                <FlexColumnInside>
                  <FlexText>
                    <Font>팔로워</Font>
                    <FlexItem>{item.follower}</FlexItem>
                  </FlexText>
                  <FlexText>
                    <Font>현재 동행팀</Font>
                    <FlexItem>{item.currentMatching}</FlexItem>
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
    </div>
  );
};

export default TeamCardCarousel;

const CustomSlider = styled(Slider)`
  .slick-slide {
  }

  .slick-list {
    margin-right: -20px;
  }

  .slick-slide > div {
    margin-right: 20px;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 343px;
  /* 팀컬러 적용 */
  background: white;
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
  /* 팀컬러 적용 상단 */
  background: #15b6a3;
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
  justify-content:center;
  align-items:center;
  font-size: 25px;
  padding: 5px;
  color: black;
  ${customMedia.lessThan('mobile')`
		font-size: 15px;
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
  padding:20px 0;
`;

const FlexItem = styled.div`
  font-size: 20px;
  color: #1f1f45;
`;

const FlexText = styled.div`
  display: flex;
  gap: 50px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  ${customMedia.lessThan('mobile')`
		gap: 20px;
	`}
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
