import React from 'react';
import styled from 'styled-components';
import {AiOutlinePlusCircle} from 'react-icons/ai'
import PlaceCard from './PlaceCard';
import { openModal } from '@/feature/ModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SelectedItemCheck } from '@/feature/SelectedItemsSlice';

type Props = {
  title: string;
  index: number;
};

const TouristCard = ({ title, index }: Props) => {
  const selecteditemlist = useSelector(
    (state: SelectedItemCheck) => state.itemList)
    console.log(selecteditemlist)
  const dispatch = useDispatch();
  const handleOpenSelectCardModal = () => {
    if (index===0){
      dispatch(
        openModal({
          modalType: 'HouseSearchModal',
          isOpen: true,
        }),
      );
    }
    else if (index===1){
      dispatch(
        openModal({
          modalType: 'FoodSearchModal',
          isOpen: true,
        }),
      );
    }
    else if (index===2){
      dispatch(
        openModal({
          modalType: 'AttractionSearchModal',
          isOpen: true,
        }),
      );
    }

  };

  return (
    <DIV>
      <Text>{title}</Text>
      <Form>
        <Container onClick={handleOpenSelectCardModal}>
          <CustomIcon />
        </Container>
        {/* <PlaceCard selectedItem={null}/> */}
        {/* <PlaceCard selectedItem={selecteditemlist?.item?.length > 0 ? selecteditemlist.item[0] : null} /> */}
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