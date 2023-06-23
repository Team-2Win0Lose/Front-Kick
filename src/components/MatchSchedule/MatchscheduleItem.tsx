import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface itemsProps {
  title: string,
  number: number;
}

const items:itemsProps[] = [
  {
    title: '1별별동행 구하기',
    number: 3
    },
  {
    title: '2별별동행 구하기',
    number: 1
    },
]

const MatchscheduleItem =() =>{

  const navigate = useNavigate();

  return(
      <div className = "Item">
          <div>
            {items.map((item, index) => (
              <Box key ={index}>
                <FlexContainer>
                  <LeftContent>
                    <RoomName>{item.title}</RoomName>
                    <Num>참여인원 {item.number} / 30명</Num>
                  </LeftContent>
                  <InfoBox onClick={() => navigate('/roominfo')}>상세정보</InfoBox>
                </FlexContainer>
              </Box>
            ))}
          </div>
      </div>
  );
}

export default MatchscheduleItem;

const Box = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 55px;
  margin-bottom: 20px;
  background: #ffffff;
  border: 1px solid #1f1f45;
  border-radius: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RoomName = styled.div`
  font-size: 20px;
  margin-Top: 10px;
  font-weight: bold;
  text-align: center;
  margin-left: 30px;
`;
const Num = styled.div`
  font-size: 15px;
  margin-left: 30px;
  margin-top:5px;
  text-align: center;

`;
const InfoBox = styled.div`
  box-sizing: border-box;
  width: 88px;
  height: 36px;
  margin-right: 10px;
  background: #ffffff;
  border: 1px solid #1f1f45;
  text-align: center;
  border-radius: 20px;
  line-height: 36px;
  cursor: pointer;
`;