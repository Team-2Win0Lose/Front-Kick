import React, { useState } from 'react';
import styled from 'styled-components';
import TouristCard from './TouristCard';
import PlaceRecommandInfo from './PlaceRecommandInfo';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

const titles = ['숙박', '음식점', '관광지'];

const SelectCard = () => {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const selecteditemlist = useSelector(
    (state: RootState) => state.selecteditem,
  );
  console.log(selecteditemlist);
  return (
    <DIV>
      {titles.map((title, index) => (
        <TouristCard key={index} title={title} index={index} />
      ))}

      {/* <Box>
          <Title>{selectedTitle} 코스 추가</Title>
          <FlexContainer>
            <PlaceRecommandInfo></PlaceRecommandInfo>
          </FlexContainer>
        </Box> */}
    </DIV>
  );
};

export default SelectCard;

const DIV = styled.div`
  width: 390px;
  overflow:scroll;
  
`;

const Box = styled.div`
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 20px;
`;
