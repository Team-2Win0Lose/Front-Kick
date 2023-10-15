import React from 'react';
import styled from 'styled-components';
import PlaceRecommandInfo from '../CreateRoom/Step/SelectCard/PlaceRecommandInfo';

type Props = {};

const AttractionSearchModal = (props: Props) => {
  return (
    <Box>
      <Title>관광지 코스 추가</Title>
      <FlexContainer>
        <PlaceRecommandInfo index={2} />
      </FlexContainer>
    </Box>
  );
};

export default AttractionSearchModal;

const Box = styled.div`
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  width: 30%;
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
  display: flex;
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;
