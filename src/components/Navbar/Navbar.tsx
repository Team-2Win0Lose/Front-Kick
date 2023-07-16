import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';



const Navbar = () => {

  const navigate = useNavigate();

  return (
    <Wrap>
    <DIV>
    <InfoBox onClick={() => navigate('/matchmaking')}>동행찾기</InfoBox>
    </DIV>
    <DIV>
    <InfoBox onClick={() => navigate('/matchmaking')}>전체</InfoBox>
    </DIV>
    </Wrap>

  )
}

export default Navbar

const InfoBox = styled.div`
  font-size: 25px;
`;

const Wrap = styled.div`
  background-color: #FFFFFF;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px;
`;

const DIV = styled.div`
  margin-right: 20px;
`