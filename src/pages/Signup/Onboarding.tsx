import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import OnboardingTeamSelect from '@/components/OnboardingTeamSelect/OnboardingTeamSelect';

const Onboarding = () => {

  const navigate = useNavigate();

  const handleSelectButtonClick = () => {
    navigate('/'); // Navigate to the '/home' route when the button is clicked
  };

  return (
    <div>
      <TitleForm>
        <H1>환영해요!</H1>
        <H1>응원하는 K리그 팀이 있나요?</H1>
      </TitleForm>
      <TeamCardContainer>
        <CarouselContainer>
          <OnboardingTeamSelect></OnboardingTeamSelect>
        </CarouselContainer>
      </TeamCardContainer>
      <ButtonContainer>
        <SelectButton onClick={handleSelectButtonClick}>선택하기</SelectButton>
        <SkipButton onClick={handleSelectButtonClick}>건너뛰기</SkipButton>
      </ButtonContainer>
    </div>
  );
};

const TeamCardContainer = styled.div`
  height:100%;
  overflow-x: hidden;
`;

const CarouselContainer = styled.div`
  height:100%;
  background-color: #1F1F45;
  overflow-x: hidden;
`;

const TitleForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:12px;
  margin-bottom: 20px;
`;
const H1 = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 10px;
`;

const SelectButton = styled.button`
  background-color: #000000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

const SkipButton = styled.button`
  background-color: transparent;
  color: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;
export default Onboarding;
