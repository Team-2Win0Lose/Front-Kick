import React,{useState} from 'react';
import styled from 'styled-components';
import TouristCard from './TouristCard';
import Modal from 'react-modal';
import { Styles } from 'react-modal';
import PlaceRecommandInfo from './PlaceRecommandInfo';

const titles = ['숙박', '음식점', '관광지'];

const SelectCard = () => {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (title: string) => {
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTitle(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      {titles.map((title, index) => (
        <TouristCard key={index} title={title} onCardClick={() => openModal(title)} />
      ))}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Tourist"
        ariaHideApp={false}
        style={customModalStyle}
      >
        <Box>
          <Title>{selectedTitle} 코스 추가</Title>
          <FlexContainer>
            <PlaceRecommandInfo></PlaceRecommandInfo>
          </FlexContainer>
          <NextButtonContainer>
            <RegisterBtn onClick={closeModal}>선택 완료</RegisterBtn>
          </NextButtonContainer>
        </Box>
        
      </Modal>
    </div>
  );
};

export default SelectCard;


const Box = styled.div`
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; 
`;

const customModalStyle: Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100%",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "360px",
    height: "500px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    overflow: "auto",
  },
};

const Title = styled.div`
    display:flex;
    font-size: 25px;
    font-weight: bold;
    justify-content:center;
    align-items:center;
    margin-bottom: 20px;
`;

const RegisterBtn = styled.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1F1F45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;






