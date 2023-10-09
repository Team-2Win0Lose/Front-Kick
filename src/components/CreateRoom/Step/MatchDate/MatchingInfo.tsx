import { RootState } from '@/app/store';
import { setMatch } from '@/feature/SummarySlice';
import { customMedia } from '@/util/GlobalStyle';
import { teamnameConvertImg } from '@/util/teamnameConvertImg';
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import styled from 'styled-components';

export interface MatchingInfoProps {
  event: any;
  onClose: () => void;
}

export interface itemsProps {
  home_team_name: string;
  away_team_name: string;
  date: Date;
  stadium: string;
}

const MatchingInfo = (props: MatchingInfoProps) => {
  const [boxColor, setBoxColor] = useState('#eeeeee');
  const dispatch = useDispatch();
  const handleSelectClick = (item: {
    home_team_name: string,
    away_team_name: string,
    date: Date,
    stadium: string}) => {
    setBoxColor('#FFCD40');
    dispatch(setMatch({
      homename: props.event.extendedProps.home_team_name,
      awayname: props.event.extendedProps.away_team_name,
      date: props.event.start.toLocaleString('ko-KR'),
      stadium: props.event.extendedProps.stadium,
    }))
  };
  console.log(props.event.extendedProps);
  
  return (
    <div>
        <Box style={{ background: boxColor }}>
          <FlexContainer>
            <FlexContainerLeft>
              <IMG src={teamnameConvertImg(props.event.extendedProps.home_team_name)} alt={props.event.extendedProps.home_team_name} />
              <Text> vs </Text>
              <IMG src={teamnameConvertImg(props.event.extendedProps.away_team_name)} alt={props.event.extendedProps.away_team_name} />
            </FlexContainerLeft>
            <FlexContainerRight>
              <FlexText>
                <DIV>경기 일정</DIV>
                <FlexItem>{props.event.start.toLocaleString('ko-KR')}</FlexItem>
              </FlexText>
              <FlexText>
                <DIV>경기 장소</DIV>
                <FlexItem>{props.event.extendedProps.stadium}</FlexItem>
              </FlexText>
            </FlexContainerRight>
          </FlexContainer>
          <FlexContainer>
            <Btn onClick={() => handleSelectClick(props.event)}>선택</Btn>
            <Btn onClick={props.onClose}>닫기</Btn>
          </FlexContainer>
        </Box>
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
  color : black;
`;

const Btn = styled.div`
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color : black;
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
  color : black;
`;

const DIV = styled.div`
  align-items: center;
  font-size: 20px;
`;
