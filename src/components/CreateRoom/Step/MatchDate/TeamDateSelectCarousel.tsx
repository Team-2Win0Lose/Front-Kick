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
  }
  
const items:itemsProps[] = [
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
    }  
]



const TeamDateSelectCarousel = () => {
    const item = items
    

    const settings = {
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 1.5,
        slidesToScroll: 2,
        swipeToSlide: true,
        autoplaySpeed:3000,
        speed: 500
    };

  
    return (
        <div className="carousel">

            <CustomSlider {...settings}>

                {item.map((item,index) => (
                    <Box key ={index}>
                        <FlexContainer>
                        <IMG src ={item.item} alt={item.name} />
                        <FlexContainerRight>
                            <Name>{item.name}</Name>
                            <FlexColumnInside>
                                <FlexColumn>
                                    <FlexText>
                                        <FlexItem>{item.follower}</FlexItem>
                                        <Font>팔로워</Font>
                                    </FlexText>
                                </FlexColumn>
                                <FlexColumn>
                                    <FlexText>
                                        <FlexItem>{item.ing}</FlexItem> 
                                        <Font>현재 동행팀</Font>
                                    </FlexText>
                                </FlexColumn>
                            </FlexColumnInside>
    
                        </FlexContainerRight>
                    </FlexContainer>




                    </Box>
                ))}

            </CustomSlider>
        </div>
    );
}

export default TeamDateSelectCarousel;

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
    color: #1F1F45;
`

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

const TeamCard = styled.div`
  width: 150px;
  height: 200px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const CenteredContent = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
