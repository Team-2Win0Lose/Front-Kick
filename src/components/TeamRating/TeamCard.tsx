import React from 'react'
import styled from "styled-components";
import TeamCardList from './TeamCardList';
import TeamCardCarousel from './TeamCardCarousel';

const TeamCard = () => {
  

  return (
    <div>
    <Title>
        🏆 구단별 응원순위
    </Title>
    <SubTitle>
        구단별 모집이 완료된 동행팀 수
    </SubTitle>
    <TeamCardCarousel/>

    </div>
    
  )
}

export default TeamCard

const Title = styled.div`
  border: 1px;
  font-size: 25px;
  margin-left: 20px;
  margin-Top: 50px;
  margin-bottom: 10px;

`;

const SubTitle = styled.div` 
  font-size: 18px;
  margin-left: 20px;
  margin-bottom: 30px;
`;
