import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import TeamDateSelect from './MatchDate/TeamDateSelect';
import PlaceSearch from './MeetingPlace/PlaceSearch';
import Detailinfo_1 from './Detailinfo/Detailinfo_1';
import Detailinfo_2 from './Detailinfo/Detailinfo_2';
import Summary from './Summary/Summary';
import SelectCard from './SelectCard/SelectCard';

const StepHeader = () => {
  const navigate = useNavigate();

  const titles = [
    '경기 일정 선택',
    '모임장소',
    '일정 카드 선택',
    '상세 내용',
    '상세 내용',
    '내 동행 일정',
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  const handleBackClick = () => {
    if (titleIndex > 0) {
      setTitleIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (titleIndex < titles.length - 1) {
      setTitleIndex((prevIndex) => prevIndex + 1);
    } else if (titleIndex === titles.length - 1) {
      navigate('/myaccompany');
    }
  };

  const nextButtonText = titleIndex === 5 ? '완료' : '다음';

  let CurrentStepComponent = null;

  switch (titleIndex) {
    case 0:
      CurrentStepComponent = TeamDateSelect;
      break;
    case 1:
      CurrentStepComponent = PlaceSearch;
      break;
    case 2:
      CurrentStepComponent = SelectCard;
      break;
    case 3:
      CurrentStepComponent = Detailinfo_1;
      break;
    case 4:
      CurrentStepComponent = Detailinfo_2;
      break;
    case 5:
      CurrentStepComponent = Summary;
      break;
    default:
      CurrentStepComponent = TeamDateSelect;
  }

  return (
    <Wrap>
      <DIV>
        <BackIcon onClick={handleBackClick} />
        <RoomTitle>{titles[titleIndex]}</RoomTitle>
        <CloseIcon onClick={() => navigate('/home')} />
      </DIV>
      <Form>
        <CurrentStepComponent></CurrentStepComponent>
      </Form>
      <NextButtonContainer>
        <RegisterBtn onClick={handleNextClick}>{nextButtonText}</RegisterBtn>
      </NextButtonContainer>
    </Wrap>
  );
};

export default StepHeader;

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
  background-color: #ffffff;
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
`;

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const RegisterBtn = styled.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: #ffffff;
`;
