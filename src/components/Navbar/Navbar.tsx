import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';



const Navbar = () => {

  const navigate = useNavigate();

  return (
    <InfoBox onClick={() => navigate('/matchmaking')}>동행찾기</InfoBox>

  )
}

export default Navbar

const InfoBox = styled.div`
  font-size: 30px;
`;