import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { openModal } from 'src/feature/ModalSlice.ts';
import { useState, useEffect } from 'react';
import { GetTeamList } from '@/lib/interface';
import { getTeam } from '@/lib/api';

const TeamCardCarousel = () => {
  const [teamList, setteamList] = useState<GetTeamList>();
  const dispatch = useDispatch();
  const sortedItems = [...(teamList?.data || [])].sort(
    (a, b) => b.currentMatching - a.currentMatching,
  );

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    speed: 500,
  };

  // api에서 team 목록 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTeam();
        setteamList(response);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  const handleOpenSearchModal = () => {
    dispatch(
      openModal({
        modalType: 'TeamCardModal',
        isOpen: true,
      }),
    );
  };

  return (
    <div className='carousel'>
      <CustomSlider {...settings}>
        {sortedItems?.map((item, index) => (
          <Box key={index}>
            <Rate>{index + 1}</Rate>
            <FlexContainer>
              <IMG src={item.teamImg} alt={item.teamName} />
              <FlexContainerRight>
                <Name>{item.teamName}</Name>
                <FlexColumnInside>
                  <FlexColumn>
                    <FlexText>
                      <FlexItem>{item.follower}</FlexItem>
                      <Font>팔로워</Font>
                    </FlexText>
                  </FlexColumn>
                  <FlexColumn>
                    <FlexText>
                      <FlexItem>{item.currentMatching}</FlexItem>
                      <Font>현재 동행팀</Font>
                    </FlexText>
                  </FlexColumn>
                </FlexColumnInside>
                <FilterBtn onClick={handleOpenSearchModal}>
                  <InfoBox>상세정보</InfoBox>
                </FilterBtn>
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
  width: 90%;
  height: 150px;
  background: #eeeeee;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 20px;
`;

const Rate = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #1f1f45;
`;

const IMG = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 8px;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const FlexContainerRight = styled.div`
  align-items: center;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexColumnInside = styled.div`
  display: flex;
`;

const FlexItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

const FlexText = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Font = styled.div`
  margin-left: 3px;
  font-size: 2px;
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

  cursor: pointer;
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
function dispatch(arg0: { payload: any; type: 'modal/openModal' }) {
  throw new Error('Function not implemented.');
}
