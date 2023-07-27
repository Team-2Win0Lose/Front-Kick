import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import NextButton from './NextButton';

const StepHeader = () => {

  const titles = ['경기 일정 선택', '모임장소', '일정 카드 선택', '상세 내용', '내 동행 일정'];
  const [titleIndex, setTitleIndex] = useState(0);

  const handleBackClick = () => {
    if (titleIndex > 0) {
      setTitleIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (titleIndex < titles.length - 1) {
      setTitleIndex((prevIndex) => prevIndex + 1);
    }
  };


  return (
    <Wrap>
        <DIV>
          <BackIcon onClick={handleBackClick}/>
          <RoomTitle>{titles[titleIndex]}</RoomTitle>
          <CloseIcon size ={30} />
        </DIV>
        <Form>
          <NextButton onClick={handleNextClick}/>
        </Form>
        
    </Wrap>
  )
}

export default StepHeader


const RoomTitle = styled.h1`
  display: flex;
  color: #000;
  font-size: 24px;
  font-weight: bold;

`;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

`;

const Wrap = styled.div`
  font-weight: bold;
  background-color: #FFFFFF;
  `;


const BackIcon = styled(IoIosArrowBack)`
    width: 30px;
    height: 30px;
    color: #000000;

`;


const CloseIcon = styled(AiOutlineClose)`
    width: 30px;
    height: 30px;
    color: #000000;
    justify-content: right;
    align-items: right;
`;


const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;