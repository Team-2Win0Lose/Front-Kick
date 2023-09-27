import { RootState } from '@/app/store';
import { setMatch } from '@/feature/SummarySlice';
import { customMedia } from '@/util/GlobalStyle';
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
    item: 'public/assets/final_logo/강원FC.png',
    homename: '강원FC',
    awayname: '서울FC',
    date: '2021.08.23 12:00',
    stadium: '강원종합운동장',
  },
];

const MatchingInfo = (props: MatchingInfoProps) => {
  const [boxColor, setBoxColor] = useState('#eeeeee');
  const dispatch = useDispatch();
  const handleSelectClick = (item: {date:string, stadium: string, homename:string, awayname:string}) => {
    setBoxColor('#1F1F4D');
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
              <IMG src={item.item} alt={item.awayname} />
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
  font-size: 30px;
  padding: 30px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color : white;
`;

const Btn = styled.div`
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color : white;
`;

const Box = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #eeeeee;
  border-radius: 20px;
  margin: 10px auto;
  padding: 10px;
  ${customMedia.lessThan('mobile')`

	`}
`;

const IMG = styled.img`
  width: 100px;
  height: 100px;
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
  padding: 10px;
  margin-right:10%;
  align-items: center;
  justify-content: center;
`;

const FlexContainerRight = styled.div`
  display: flex;
  padding:10px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 15px;
`;

const FlexItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const FlexText = styled.div`
  display: flex;
  align-items: center;
  padding:10px;
  gap: 20px;
  color : white;
`;

const DIV = styled.div`
  align-items: center;
  font-size: 20px;
`;
