import React,{useState} from 'react';
import styled from 'styled-components';
import TouristCard from './TouristCard';
import Modal from 'react-modal';
import { Styles } from 'react-modal';

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
          <FlexContainer>
            <Text>{selectedTitle} 코스 추가</Text>
            <Text>⚽️ 킥킥 추천 장소</Text>
            <Btn onClick={closeModal}>닫기</Btn>
          </FlexContainer>
        </Box>
        
      </Modal>
    </div>
  );
};

export default SelectCard;


const Box = styled.div`
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    margin: 10px auto;
`;

const FlexContainer = styled.div`
    justify-content: center;
    align-items: center;

`;

const customModalStyle: Styles = {  overlay: {
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
    justifyContent: "center",
    overflow: "auto",
  },
};

const Btn = styled.div`
    font-size: 15px;
    font-weight: bold;
    justify-content:center;
    align-items:center;
    margin-left: 5%;
    margin-right: 5%;
    margin-top:2%;
    margin-bottom: 2%;
`;


const Text = styled.div`
    font-size: 18px;
    font-weight: bold;
    justify-content:center;
    align-items:center;
    margin-left: 5%;
    margin-right: 5%;
`;





