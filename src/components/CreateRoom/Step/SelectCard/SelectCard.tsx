import React,{useState} from 'react';
import styled from 'styled-components';
import TouristCard from './TouristCard';
import PlaceRecommandInfo from './PlaceRecommandInfo';

const titles = ['숙박', '음식점', '관광지'];

const SelectCard = () => {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  return (
    <div>
      {titles.map((title, index) => (
        <TouristCard key={index} title={title} index={index}/>
      ))}
    
        {/* <Box>
          <Title>{selectedTitle} 코스 추가</Title>
          <FlexContainer>
            <PlaceRecommandInfo></PlaceRecommandInfo>
          </FlexContainer>
        </Box> */}

    </div>
  );
};

export default SelectCard;

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
    display:flex;
    font-size: 25px;
    font-weight: bold;
    justify-content:center;
    text-align: center;
    align-items:center;
    margin-bottom: 20px;
`;
