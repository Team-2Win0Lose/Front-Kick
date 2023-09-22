import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamDateCalendar from './TeamDateCalendar';
import { useState } from 'react';
import { customMedia } from '@/util/GlobalStyle';

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
      image: 'public/assets/final_logo/대구FC.png',
    },
    {
      title: '전북vs서울',
      start: '2023-08-11',
      image: 'public/assets/final_logo/대구FC.png',
    },
    {
      title: '전북vs서울',
      start: '2023-09-12 13:00:00',
      image: 'public/assets/final_logo/대구FC.png',
    },
  ],
  광주FC: [
    {
      title: '야호',
      start: '2023-08-10',
      image: 'public/assets/final_logo/대구FC.png',
    },
    { title: '승훈vs서울', start: '2023-08-11' },
  ],
  대구FC: [
    {
      title: '휴..',
      start: '2023-08-10',
      image: 'public/assets/final_logo/대구FC.png',
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
    item: 'public/assets/final_logo/강원FC.png',
    name: '강원FC',
    ing: 112,
    follower: 23,
  },
  {
    rating: 2,
    item: 'public/assets/final_logo/광주FC.png',
    name: '광주FC',
    ing: 123,
    follower: 23,
  },
  {
    rating: 3,
    item: 'public/assets/final_logo/대구FC.png',
    name: '대구FC',
    ing: 312,
    follower: 23,
  },
  {
    rating: 4,
    item: 'public/assets/final_logo/대전하나시티즌.png',
    name: '대전하나시티즌',
    ing: 212,
    follower: 21,
  },
  {
    rating: 5,
    item: 'public/assets/final_logo/수원삼성블루윙즈.png',
    name: '수원삼성블루윙즈',
    ing: 152,
    follower: 29,
  },
  {
    rating: 6,
    item: 'public/assets/final_logo/수원FC.png',
    name: '수원FC',
    ing: 172,
    follower: 2,
  },
  {
    rating: 7,
    item: 'public/assets/final_logo/울산현대.png',
    name: '울산현대',
    ing: 112,
    follower: 264,
  },
  {
    rating: 8,
    item: 'public/assets/final_logo/인천유나이티드.png',
    name: '인천유나이티드',
    ing: 912,
    follower: 234,
  },
  {
    rating: 9,
    item: 'public/assets/final_logo/전북현대모터스.png',
    name: '전북현대모터스',
    ing: 124,
    follower: 2223,
  },
  {
    rating: 10,
    item: 'public/assets/final_logo/제주유나이티드.png',
    name: '제주유나이티드',
    ing: 992,
    follower: 213,
  },
  {
    rating: 11,
    item: 'public/assets/final_logo/포항스틸러스.png',
    name: '포항스틸러스',
    ing: 132,
    follower: 20,
  },
  {
    rating: 12,
    item: 'public/assets/final_logo/FC서울.png',
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
    slidesToShow: 7,
    slidesToScroll: 2,
    swipeToSlide: true,
    accessibility: true, 
    autoplaySpeed: 3000,
    speed: 500,
    prevArrow: <PrevArrow>&#8249;</PrevArrow>,
    nextArrow: <NextArrow>&#8250;</NextArrow>, 
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
          <div key={index}>
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

const DIV = styled.div`
  display: flex;
  flex-direction: column;
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;

const TeamCalendarContainer = styled.div`
  background-color: white;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  width: 70px;
  height: 70px;
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
