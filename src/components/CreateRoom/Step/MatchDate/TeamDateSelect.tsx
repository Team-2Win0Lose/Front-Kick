import React from 'react'
import styled from "styled-components";
import TeamDateSelectCarousel from './TeamDateSelectCarousel';


const TeamDateSelect = () => {
  

  return (
    <div>
      <TeamCardContainer>
        <TeamDateSelectCarousel/>
      </TeamCardContainer>
    </div>
    
  )
}

export default TeamDateSelect

const TeamCardContainer = styled.div`
  height:200px;
  overflow-x: hidden;
`;