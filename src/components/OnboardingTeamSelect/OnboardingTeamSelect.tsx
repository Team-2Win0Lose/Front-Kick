import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import SelectTeamCard from "./SelectTeamCard";
import { customMedia } from "@/util/GlobalStyle";

interface itemsProps {
  rating: number;
  logo: string;
  teamcolor: string;
  name: string;
  ing: number;
  follower: number;
  end: number;
}

const items:itemsProps[] = [
  {
    rating: 1,
    logo: 'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.png',
    teamcolor: '#8e2424',
    name: '강원FC',
    ing: 112,
    follower: 23,
    end: 45
    },
    {
    rating: 2,
    logo: 'https://kickstorage.blob.core.windows.net/logo/gwangju_fc.png',
    teamcolor: '#20ac1b',
    name: '광주FC',
    ing: 123,
    follower: 23,
    end: 45
    },
    {
    rating: 3,
    logo: 'https://kickstorage.blob.core.windows.net/logo/daegu_fc.png',
    teamcolor: '#8e14cb',
    name: '대구FC',
    ing: 312,
    follower: 23,
    end: 45
    },
    {
    rating: 4,
    logo: 'https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.png',
    teamcolor: '#320195',
    name: '대전하나시티즌',
    ing: 212,
    follower: 21,
    end: 45
    },
    {
    rating: 5,
    logo: 'https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.png',
    teamcolor: '#47c18c',
    name: '수원삼성블루윙즈',
    ing: 152,
    follower: 29,
    end: 45
    },
    {
    rating: 6,
    logo: 'https://kickstorage.blob.core.windows.net/logo/suwon_fc.png',
    teamcolor: '#99fce1',
    name: '수원FC',
    ing: 172,
    follower: 2,
    end: 45
    },
    {
    rating: 7,
    logo: 'https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.png',
    teamcolor: '#e600cb',
    name: '울산현대',
    ing: 112,
    follower: 264,
    end: 45
    },
    {
    rating: 8,
    logo: 'https://kickstorage.blob.core.windows.net/logo/incheon_united.png',
    teamcolor: '#184fe6',
    name: '인천유나이티드',
    ing: 912,
    follower: 234,
    end: 45
    },
    {
    rating: 9,
    logo: 'https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.png',
    teamcolor: '#0c3b1a3d',
    name: '전북현대모터스',
    ing: 124,
    follower: 2223,
    end: 45

    },
    {
    rating: 10,
    logo: 'https://kickstorage.blob.core.windows.net/logo/jeju_united.png',
    teamcolor: '#0effe3',
    name: '제주유나이티드',
    ing: 992,
    follower: 213,
    end: 45

    },
    {
    rating: 11,
    logo: 'https://kickstorage.blob.core.windows.net/logo/pohang_stealus.png',
    teamcolor: '#3f07a7',
    name: '포항스틸러스',
    ing: 132,
    follower: 20,
    end: 45

    },
    {
    rating: 12,
    logo: 'https://kickstorage.blob.core.windows.net/logo/fc_seoul.png',
    teamcolor: '#ff0000',
    name: 'FC서울',
    ing: 12,
    follower: 243,
    end: 45
    }  
]


const OnboardingTeamSelect = () => {

  const [selectedTeam, setSelectedTeam] = useState<string | null>('강원FC');

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
    
  }
  
  return (
    <CarouselContainer>
      <CustomSlider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
          <BoxWrapper key={index}>
            <Box onClick={() => handleBoxClick(item.name)}>
              <FlexContainer>
                <IMG src={item.logo} alt={item.name} />
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
        <SelectTeamCard
          teamName={selectedTeam}
          teamcolor={items.find((item) => item.name === selectedTeam)?.teamcolor || ""}
          logo={items.find((item) => item.name === selectedTeam)?.logo || ""}
          ing={items.find((item) => item.name === selectedTeam)?.ing || 0}
          follower={items.find((item) => item.name === selectedTeam)?.follower || 0}
          end={items.find((item) => item.name === selectedTeam)?.end || 0}
          name={selectedTeam || ""}
        />
      )}
    </CarouselContainer>
  );
};


export default OnboardingTeamSelect;

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
