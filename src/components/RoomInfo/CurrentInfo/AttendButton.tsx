import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AttendButton =() =>{

    const navigate = useNavigate();
  
    return(
       
        <InfoBox onClick={() => navigate('/Matchmaking')}>참여하기</InfoBox>
       
    );
  }

  export default AttendButton;

  const InfoBox = styled.div`
  box-sizing: border-box;
  width: 88px;
  height: 36px;
  margin-right: 10px;
  background: #ffffff;
  border: 1px solid #1f1f45;
  text-align: center;
  border-radius: 20px;
  line-height: 36px;
  cursor: pointer;
`;