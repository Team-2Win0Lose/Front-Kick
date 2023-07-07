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
  font-size: 20px;
  margin-Top: 30px;
  font-weight: bold;
`;
