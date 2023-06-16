import React from 'react'
import styled from "styled-components";
import TeamCardCarousel from './TeamCardCarousel';


const TeamCard = () => {
  return (
    <div>
    <Title>
        팀 카드 둘러보기
    </Title>
    <TeamCardCarousel/> 

    </div>
    
  )
}

export default TeamCard



const Title = styled.div`
  font-size: 30px;
  margin-Top: 30px;
  font-weight: bold;
`;
