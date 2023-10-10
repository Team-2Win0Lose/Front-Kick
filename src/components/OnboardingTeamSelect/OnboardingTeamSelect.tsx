import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCallback, useEffect, useState } from 'react';
import SelectTeamCard from './SelectTeamCard';
import { customMedia } from '@/util/GlobalStyle';
import { teamnameConvertImg } from '@/util/teamnameConvertImg';


const OnboardingTeamSelect = () => {
  const [selectedTeam, setSelectedTeam] = useState<any | null>();

  const [rating, setrating] = useState<
    {
      football_team_id: number;
      original_team_name: string;
      team_name: string;
      follower: number;
      recruit_ing: number;
      logo_img_url: string;
      team_color_main: string;
      team_color_sub: string;
      recruit_end: number;
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

  const handleBoxClick = (teamName: string) => {
    setSelectedTeam(teamName);
  };

  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    speed: 500,
    accessibility: true,
    prevArrow: <PrevArrow>&#8249;</PrevArrow>,
    nextArrow: <NextArrow>&#8250;</NextArrow>,
    responsive: [
      // 반응형 속성 설정
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <CustomSlider {...settings}>
        {sortedItems.map((item, index) => (
          <div key={index}>
            <BoxWrapper key={index}>
              <Box onClick={() => handleBoxClick(item.original_team_name)}>
                <FlexContainer>
                  <IMG src={teamnameConvertImg(item.original_team_name)} alt={item.original_team_name} />
                </FlexContainer>
              </Box>
            </BoxWrapper>
            <NameWrapper>
              <Name>{item.team_name}</Name>
            </NameWrapper>
          </div>
        ))}
      </CustomSlider>
      {selectedTeam && (
        <SelectTeamCard
          original_team_name={selectedTeam}
          team_color_main={sortedItems.find((item) => item.original_team_name === selectedTeam)?.team_color_main || ''}
          team_name={sortedItems.find((item) => item.original_team_name === selectedTeam)?.team_name || ''}
          team_color_sub={sortedItems.find((item) => item.original_team_name === selectedTeam)?.team_color_sub || ''}
          logo_img_url={sortedItems.find((item) => item.original_team_name === selectedTeam)?.original_team_name|| ''}
          recruit_ing={sortedItems.find((item) => item.original_team_name === selectedTeam)?.recruit_ing || 1}
          follower={sortedItems.find((item) => item.original_team_name === selectedTeam)?.follower || 1}
          recruit_end={sortedItems.find((item) => item.original_team_name === selectedTeam)?.recruit_end || 1}
          // name={selectedTeam || ''}
        />
      )}
    </CarouselContainer>
  );
};

export default OnboardingTeamSelect;

const CustomSlider = styled(Slider)`
  max-width: 100vw;
  width: 100%;
  overflow: hidden;

  .slick-slide {
  }

  .slick-list {
    margin-right: -20%;
  }

  .slick-slide > div {
    margin-right: 20%;
  }
`;
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface BoxProps {
  backgroundColor?: string;
}

const Box = styled.div<BoxProps>`
  position: relative;
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: 10%;
  overflow: hidden;
`;

const IMG = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  font-size: 15px;
  color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
  ${customMedia.lessThan('tablet')`
		font-size: 10px;
	`}
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`;

const NextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`;
