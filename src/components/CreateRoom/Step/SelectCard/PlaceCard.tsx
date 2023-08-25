import React from 'react';
import styled from 'styled-components';
import { itemsProps } from './PlaceInfoCarousel';
import { useSelector } from 'react-redux';
import { SelectedItemCheck } from '@/feature/SelectedItemsSlice';
interface Props {
    selectedItem: itemsProps | null;
  }


  
const PlaceCard = ({ selectedItem }: Props) => {
    if (!selectedItem) {
      // 전달받은 아이템이 null인 경우, 처리할 내용
      return <div>No selected item</div>;
    }

    return (

    <Container>
      <CardIMG selectedItem={selectedItem} />
      {selectedItem && <CardName>{selectedItem.name}</CardName>}
    </Container>
  );
};

export default PlaceCard;

const CardIMG = styled.div<{ selectedItem: itemsProps | null }>`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-image: url(${props => (props.selectedItem ? props.selectedItem.IMG : '')});
  background-size: cover;
`;

const CardName = styled.div`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #1f1f45;
  gap: 15px;
  margin-bottom: 20px;
  margin-right: 10px;

  & > div {
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }

  ${CardIMG} {
    background-color: #ffffff;
    border-radius: 100%;
    background-size: cover;
  }

  ${CardName} {
    font-size: 15px;
    font-weight: bold;
    color: white;
  }
`;
