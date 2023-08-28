import React, { useState } from 'react';
import styled from 'styled-components';

interface MatchingInfoProps {
  event: any;
  onClose: () => void;
}

interface itemsProps {
  rating: number;
  item: string;
  name: string;
  stadium: string;
}

const items: itemsProps[] = [
  {
    rating: 1,
    item: 'public/assets/teams/강원FC.png',
    name: '강원FC',
    stadium: '강원종합운동장',
  },
];

const MatchingInfo = (props: MatchingInfoProps) => {
  const [boxColor, setBoxColor] = useState('#eeeeee');

  const handleSelectClick = () => {
    setBoxColor('#42b72a');
  };
  return (
    <div>
      {items.map((item, index) => (
        <Box key={index} style={{ background: boxColor }}>
          <FlexContainer>
            <FlexContainerLeft>
              <IMG src={item.item} alt={item.name} />
              <Text> vs </Text>
              <IMG src={item.item} alt={item.name} />
            </FlexContainerLeft>
            <FlexContainerRight>
              <FlexText>
                <DIV>경기 일정</DIV>
                <FlexItem>{item.stadium}</FlexItem>
              </FlexText>
              <FlexText>
                <DIV>경기 장소</DIV>
                <FlexItem>{item.stadium}</FlexItem>
              </FlexText>
            </FlexContainerRight>
          </FlexContainer>
          <FlexContainer>
            <Btn onClick={handleSelectClick}>선택</Btn>
            {/* <Btn onClick={onClose}>닫기</Btn> */}
          </FlexContainer>
        </Box>
      ))}
    </div>
  );
};

export default MatchingInfo;

const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
`;

const Btn = styled.div`
  font-size: 15px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const Box = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  background: #eeeeee;
  border-radius: 20px;
  margin: 10px auto;
  padding: 10px;
`;

const IMG = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
`;

const FlexContainerLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const FlexItem = styled.div`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
`;

const FlexText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DIV = styled.div`
  font-size: 5px;
`;
