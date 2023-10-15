import React from 'react';
import styled from 'styled-components';
import PlaceRecommandInfo from '../CreateRoom/Step/SelectCard/PlaceRecommandInfo';
import SearchBar from '../CreateRoom/Step/SelectCard/Searchbar';

type Props = {};

const FoodSearchModal = (props: Props) => {
  return (
    <Box>
      <LeftContainer>
        <Title>음식점 코스 추가</Title>
        <SearchBar></SearchBar>
      </LeftContainer>
      <FlexContainer>
        <PlaceRecommandInfo index={1} />
      </FlexContainer>
    </Box>
  );
};

export default FoodSearchModal;

const LeftContainer = styled.div`
  flex-direction:column;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  width: 80%;
  height: 90%;
  overflow-x: auto;
  overflow-y: auto;
  z-index: 100;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

