import React from 'react';
import styled from 'styled-components';
import {AiOutlinePlusCircle} from 'react-icons/ai'

type Props = {
  title: string;
};

const TouristCard = ({ title }: Props) => {
  return (
    <DIV>
      <Text>{title}</Text>
      <Container>
        <CustomIcon></CustomIcon>
      </Container>
    </DIV>
  );
};

export default TouristCard;


const DIV = styled.div`
  margin-left: 20px;
`;



const Text = styled.p`
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;

`;


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #1F1F45;
  gap: 15px;
  margin-bottom:20px;
`;

const CustomIcon = styled(AiOutlinePlusCircle)`
  width: 40px;
  height: 40px;
  color: white;

`;