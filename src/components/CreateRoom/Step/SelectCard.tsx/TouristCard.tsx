import React from 'react';
import styled from 'styled-components';
import {AiOutlinePlusCircle} from 'react-icons/ai'
import PlaceCard from './PlaceCard';

type Props = {
  title: string;
  onCardClick: () => void;
};

const TouristCard = ({ title, onCardClick }: Props) => {
  return (
    <DIV>
      <Text>{title}</Text>
      <Form>
        <Container onClick={onCardClick}>
          <CustomIcon />
        </Container>
        <PlaceCard selectedItem={null}/>
      </Form>  
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

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

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
  margin-right: 10px;
  cursor: pointer; 
`;

const CustomIcon = styled(AiOutlinePlusCircle)`
  width: 40px;
  height: 40px;
  color: white;

`;