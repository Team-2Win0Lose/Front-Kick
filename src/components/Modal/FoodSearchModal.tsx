import React from 'react'
import styled from 'styled-components';
import PlaceRecommandInfo from '../CreateRoom/Step/SelectCard/PlaceRecommandInfo';

type Props = {}

const HouseSearchModal = (props: Props) => {
  return (
    <Box>
          <Title>음식점 코스 추가</Title>
          <FlexContainer>
            <PlaceRecommandInfo></PlaceRecommandInfo>
          </FlexContainer>
    </Box>
  )
}

export default HouseSearchModal

const Box = styled.div`
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  width: 90%;
  height: 547px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 100;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; 
`;

const Title = styled.div`
    display:flex;
    font-size: 25px;
    font-weight: bold;
    justify-content:center;
    text-align: center;
    align-items:center;
    margin-top: 20px;
    margin-bottom: 10px;
`;