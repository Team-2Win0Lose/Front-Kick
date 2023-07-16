import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface itemsProps {
    rating: number,
    item: string,
    name: string,
    ing: number,
    follower: number,
    end: number;
  }
  
const items:itemsProps[] = [
  {
    rating: 1,
    item: 'public/assets/teams/강원FC.png',
    name: '강원FC',
    ing: 12,
    follower: 23,
    end: 23 
    },
    {
    rating: 2,
    item: 'public/assets/teams/광주FC.png',
    name: '광주FC',
    ing: 12,
    follower: 23,
    end: 23 
    },
    {
    rating: 3,
    item: 'public/assets/teams/대구FC.png',
    name: '대구FC',
    ing: 12,
    follower: 23,
    end: 23 
    },
    {
    rating: 4,
    item: 'public/assets/teams/대전하나시티즌.png',
    name: '대전하나시티즌',
    ing: 12,
    follower: 23,
    end: 23 
    },
    {
    rating: 5,
    item: 'public/assets/teams/수원삼성블루윙즈.png',
    name: '수원삼성블루윙즈',
    ing: 12,
    follower: 23,
    end: 23 
    },
    {
    rating: 6,
    item: 'public/assets/teams/수원FC.png',
    name: '수원FC',
    ing: 12,
    follower: 23,
    end: 23 
    },
    {
    rating: 7,
    item: 'public/assets/teams/울산현대.png',
    name: '울산현대',
    ing: 12,
    follower: 23,
    end: 23 
    },
    {
    rating: 8,
    item: 'public/assets/teams/인천유나이티드.png',
    name: '인천유나이티드',
    ing: 12,
    follower: 23,
    end: 23 
    },
    {
    rating: 9,
    item: 'public/assets/teams/전북현대모터스.png',
    name: '전북현대모터스',
    ing: 12,
    follower: 23,
    end: 23 
    },
    {
    rating: 10,
    item: 'public/assets/teams/제주유나이티드.png',
    name: '제주유나이티드',
    ing: 12,
    follower: 23,
    end: 23 
    },
    {
    rating: 11,
    item: 'public/assets/teams/포항스틸러스.png',
    name: '포항스틸러스',
    ing: 12,
    follower: 23,
    end: 23 
    },
    {
    rating: 12,
    item: 'public/assets/teams/FC서울.png',
    name: 'FC서울',
    ing: 12,
    follower: 23,
    end: 23 
    }  
]



const TeamCardCarousel = () => {

    const settings = {
        dots: false,
        autoplay: true,
        Infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        swipeToslide: true,
        autoplaySpeed:3000,
        speed: 500
    }
  
    return (
        <div className="carousel">
            
            <CustomSlider {...settings}>
            
                {items.map((item, index) => (
                    
                    <Box key={index}>
                        <Rate>{item.rating}</Rate>
                        <IMG src ={item.item} alt={item.name} />
                        <Name>{item.name}</Name>
                        <FlexContainer>
                            <FlexColumn>
                                <FlexItem>{item.ing}</FlexItem>
                                <FlexText>모집 중인 동행 팀</FlexText>
                            </FlexColumn>
                            <FlexColumn>
                                <FlexItem>{item.follower}</FlexItem>
                                <FlexText>팔로워</FlexText>
                            </FlexColumn>
                            <FlexColumn>
                                <FlexItem>{item.end}</FlexItem>
                                <FlexText>마감된 동행팀</FlexText>
                            </FlexColumn>
                        </FlexContainer>
                        
                    </Box>
    
                ))}
                
            </CustomSlider>
            
        </div>
    );
}

export default TeamCardCarousel;

const CustomSlider = styled(Slider)`
  .slick-slide {
    margin-right: 20px;
  }
`;



const Box = styled.div`
    width: 100%;
    height: 500px;
    justify-content: center;
    align-items: center;
    background: #EEEEEE;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
`;

const Rate = styled.div`
    font-size: 80px;
    font-weight: bold;
    text-align: left;
    margin-top: 10px;
    padding-left: 50px;
    
`

const IMG = styled.img`
    width: 100%;
    height: 200px;
    object-fit: contain;
`;

const Name = styled.div`
    font-size: 40px;
    margin-Top: 60px;
    font-weight: bold;
    text-align: center;
    margin: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;

`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexItem = styled.div`
    margin-top: 30px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;

`;

const FlexText = styled.div`
    margin-top: 10px;
    font-size: 15px;


`;