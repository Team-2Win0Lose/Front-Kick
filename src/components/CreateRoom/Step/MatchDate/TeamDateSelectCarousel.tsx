import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamDateCalendar from './TeamDateCalendar';
import { useState } from 'react';

type TeamName = keyof typeof events;

interface itemsProps {
  rating: number;
  item: string;
  name: TeamName;
  ing: number;
  follower: number;
}

const events = {
  강원FC: [
    {
      title: '축구',
      start: '2023-08-10',
      image: 'public/assets/teams/대구FC.png',
    },
    {
      title: '전북vs서울',
      start: '2023-08-11',
      image: 'public/assets/teams/대구FC.png',
    },
  ],
  광주FC: [
    {
      title: '야호',
      start: '2023-08-10',
      image: 'public/assets/teams/대구FC.png',
    },
    { title: '승훈vs서울', start: '2023-08-11' },
  ],
  대구FC: [
    {
      title: '휴..',
      start: '2023-08-10',
      image: 'public/assets/teams/대구FC.png',
    },
    { title: '승훈vs서울', start: '2023-08-13' },
  ],
  대전하나시티즌: [],
  수원삼성블루윙즈: [],
  수원FC: [],
  울산현대: [],
  인천유나이티드: [],
  전북현대모터스: [],
  제주유나이티드: [],
  포항스틸러스: [],
  FC서울: [],
};

const items: itemsProps[] = [
  {
    rating: 1,
    item: 'public/assets/teams/강원FC.png',
    name: '강원FC',
    ing: 112,
    follower: 23,
  },
  {
    rating: 2,
    item: 'public/assets/teams/광주FC.png',
    name: '광주FC',
    ing: 123,
    follower: 23,
  },
  {
    rating: 3,
    item: 'public/assets/teams/대구FC.png',
    name: '대구FC',
    ing: 312,
    follower: 23,
  },
  {
    rating: 4,
    item: 'public/assets/teams/대전하나시티즌.png',
    name: '대전하나시티즌',
    ing: 212,
    follower: 21,
  },
  {
    rating: 5,
    item: 'public/assets/teams/수원삼성블루윙즈.png',
    name: '수원삼성블루윙즈',
    ing: 152,
    follower: 29,
  },
  {
    rating: 6,
    item: 'public/assets/teams/수원FC.png',
    name: '수원FC',
    ing: 172,
    follower: 2,
  },
  {
    rating: 7,
    item: 'public/assets/teams/울산현대.png',
    name: '울산현대',
    ing: 112,
    follower: 264,
  },
  {
    rating: 8,
    item: 'public/assets/teams/인천유나이티드.png',
    name: '인천유나이티드',
    ing: 912,
    follower: 234,
  },
  {
    rating: 9,
    item: 'public/assets/teams/전북현대모터스.png',
    name: '전북현대모터스',
    ing: 124,
    follower: 2223,
  },
  {
    rating: 10,
    item: 'public/assets/teams/제주유나이티드.png',
    name: '제주유나이티드',
    ing: 992,
    follower: 213,
  },
  {
    rating: 11,
    item: 'public/assets/teams/포항스틸러스.png',
    name: '포항스틸러스',
    ing: 132,
    follower: 20,
  },
  {
    rating: 12,
    item: 'public/assets/teams/FC서울.png',
    name: 'FC서울',
    ing: 12,
    follower: 243,
  },
];

const TeamDateSelectCarousel = () => {
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    speed: 500,
  };

  const [selectedTeam, setSelectedTeam] = useState<keyof typeof events | null>(
    null,
  );

  const handleBoxClick = (teamName: TeamName) => {
    setSelectedTeam(teamName);
  };

  return (
    <CarouselContainer>
      <CustomSlider {...settings}>
        {items.map((item, index) => (
          <div>
            <BoxWrapper key={index}>
              <Box onClick={() => handleBoxClick(item.name)}>
                <FlexContainer>
                  <IMG src={item.item} alt={item.name} />
                </FlexContainer>
              </Box>
            </BoxWrapper>
            <NameWrapper>
              <Name>{item.name}</Name>
            </NameWrapper>
          </div>
        ))}
      </CustomSlider>
      {selectedTeam && (
        <TeamCalendarContainer>
          <TeamDateCalendar
            teamName={selectedTeam}
            teamEvents={events[selectedTeam]}
          />
        </TeamCalendarContainer>
      )}
    </CarouselContainer>
  );
};

export default TeamDateSelectCarousel;

const CustomSlider = styled(Slider)`
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

const TeamCalendarContainer = styled.div`
  background-color: white;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background: #eeeeee;
  border-radius: 50%;
  margin-top: 10%;
  overflow: hidden;
`;

const IMG = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  font-size: 10px;
  color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
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
