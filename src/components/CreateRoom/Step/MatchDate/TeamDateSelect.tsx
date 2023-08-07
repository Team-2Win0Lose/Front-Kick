import React from 'react'
import styled from "styled-components";
import TeamDateSelectCarousel from './TeamDateSelectCarousel';
import TeamDateCalendar from './TeamDateCalendar';

const TeamDateSelect = () => {
  
  return (
  
    <TeamCardContainer>
      <TeamDateSelectCarousel/>
    </TeamCardContainer>
  

  )
}

export default TeamDateSelect

const TeamCardContainer = styled.div`
  height:80%;
  background-color: #1F1F45;
  overflow-x: hidden;
`;
