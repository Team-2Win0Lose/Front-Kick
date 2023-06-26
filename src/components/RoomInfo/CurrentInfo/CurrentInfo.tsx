import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AttendButton from './AttendButton';

interface itemsProps {
  title: string,
  number: number;
}

const items:itemsProps[] = [
  {
    title: '1별별동행 구하기',
    number: 3
    }
]

const CurrentInfo =() =>{

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
                  <AttendButton/>
                </FlexContainer>
              </Box>
            ))}
          </div>
      </div>
  );
}


export default CurrentInfo;

const Box = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 55px;
  margin-bottom: 20px;
  background: #ffffff;
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
