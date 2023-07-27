import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface NextButtonProps {
  onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  return <RegisterBtn onClick={onClick}>다음</RegisterBtn>;
};


export default NextButton;

const RegisterBtn = styled.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1F1F45;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: #ffffff;
`;
