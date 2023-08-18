import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


export interface itemsProps {
    rating: number;
    item: string;
    name: string;
    loc: string;
    follower: number;
  }
  
const items:itemsProps[] = [
  {
    rating: 1,
    item: 'public/assets/teams/강원FC.png',
    name: '안녕호텔',
    loc: '경기도 어디쯤',
    follower: 23,
    },
    {
    rating: 2,
    item: 'public/assets/teams/광주FC.png',
    name: '나이스민박',
    loc: "서울 어디쯤",
    follower: 23,
    },
    {
    rating: 3,
    item: 'public/assets/teams/대구FC.png',
    name: '게스트하우스',
    loc: '대구 어디쯤',
    follower: 23,
    },
    {
    rating: 4,
    item: 'public/assets/teams/대전하나시티즌.png',
    name: '우리집',
    loc: '대전 어디쯤',
    follower: 21,
    },
    {
    rating: 5,
    item: 'public/assets/teams/수원삼성블루윙즈.png',
    name: '하이숙박',
    loc: '수원 어디쯤',
    follower: 29,
    }

]

const PlaceInfoCarousel = () => {
  const [selectedItem, setSelectedItem] = useState<itemsProps | null>(null);

  const handleCheckboxChange = (item: itemsProps) => {
    setSelectedItem(item);
  };

  const handleCompleteSelection = () => {
    console.log('선택 완료 버튼 클릭됨, selectedItem:', selectedItem);
    // 선택 완료 버튼 클릭 시, 선택된 아이템 정보로 PlaceCard에 전달
    if (selectedItem) {
      // selectedItem이 있을 경우에만 처리
      setSelectedItem(null); // 선택 완료 후 정보 초기화
    }
  };

  return (
    <div className="carousel">
    
        {items.map((item, index) => (
          
            <Box key={index}>
                <FlexContainer>
                    <IMG src ={item.item} alt={item.name} />
                    <InfoContainer>
                        <FlexContainerRight>
                            <Name>{item.name}</Name>
                            <Loc>{item.loc}</Loc>    
                        </FlexContainerRight>
                        <CheckboxContainer>
                            <Checkbox
                                type="checkbox"
                                onChange={() => handleCheckboxChange(item)}
                            />
                        </CheckboxContainer>
                    </InfoContainer>
                </FlexContainer>
            </Box>
            
        ))}

      <NextButtonContainer>
        <RegisterBtn onClick={handleCompleteSelection}>선택 완료</RegisterBtn>
      </NextButtonContainer>
    
     
    </div>
  )
}

export default PlaceInfoCarousel


const Box = styled.div`
    position: relative; 
    display: flex;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    height: 80px;
    background: #eeeeee;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-bottom: 10px;
`;


const IMG = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-left: 20px;
    margin-right: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Name = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const FlexContainer = styled.div`
  display: flex;

`;

const FlexContainerRight = styled.div`
  align-items: center;
  justify-content: space-between;


`;

const Loc = styled.div`
    font-size: 15px;
    font-weight: bold;
    
`;

const CheckboxContainer = styled.div` 
    margin-left: 50px;
`;

const Checkbox = styled.input`
`;

const RegisterBtn = styled.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1F1F45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;