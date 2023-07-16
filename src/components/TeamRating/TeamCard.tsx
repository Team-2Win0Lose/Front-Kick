import React from 'react'
import styled from "styled-components";
import TeamCardCarousel from './TeamCardCarousel';


const TeamCard = () => {
  

  return (
    <div>
    <Title>
        구단별 응원순위
    </Title>
    <TeamCardCarousel/> 

    </div>
    
  )
}

export default TeamCard



const Title = styled.div`
  border: 1px;
  font-size: 30px;
  margin-Top: 80px;
  margin-bottom: 30px;
  font-weight: bold;
`;
