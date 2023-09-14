import { RootState } from '@/app/store';
import { setMatch } from '@/feature/SummarySlice';
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import styled from 'styled-components';

interface MatchingInfoProps {
  event: any;
  onClose: () => void;
}

interface itemsProps {
  rating: number;
  item: string;
  homename: string;
  awayname: string;
  date: string;
  stadium: string;
}

const items: itemsProps[] = [
  {
    rating: 1,
    item: 'public/assets/teams/강원FC.png',
    homename: '강원FC',
    awayname: '서울FC',
    date: '2021.08.23',
    stadium: '강원종합운동장',
  },
];

const MatchingInfo = (props: MatchingInfoProps) => {
  const [boxColor, setBoxColor] = useState('#eeeeee');
  const dispatch = useDispatch();
  const handleSelectClick = (item: {date:string, stadium: string, homename:string, awayname:string}) => {
    setBoxColor('#42b72a');
    dispatch(setMatch(item))
  };
  
  return (
    <div>
      {items.map((item, index) => (
        <Box key={index} style={{ background: boxColor }}>
          <FlexContainer>
            <FlexContainerLeft>
              <IMG src={item.item} alt={item.homename} />
              <Text> vs </Text>
              <IMG src={item.item} alt={item.homename} />
            </FlexContainerLeft>
            <FlexContainerRight>
              <FlexText>
                <DIV>경기 일정</DIV>
                <FlexItem>{item.date}</FlexItem>
              </FlexText>
              <FlexText>
                <DIV>경기 장소</DIV>
                <FlexItem>{item.stadium}</FlexItem>
              </FlexText>
            </FlexContainerRight>
          </FlexContainer>
          <FlexContainer>
            <Btn onClick={() => handleSelectClick(item)}>선택</Btn>
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
