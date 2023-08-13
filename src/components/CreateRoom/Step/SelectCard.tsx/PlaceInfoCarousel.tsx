import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

interface itemsProps {
    rating: number,
    item: string,
    name: string,
    loc: string,
    follower: number,
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
                            <Checkbox type="checkbox" />
                        </CheckboxContainer>
                    </InfoContainer>
                </FlexContainer>
                
            </Box>
            
        ))}
    
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
