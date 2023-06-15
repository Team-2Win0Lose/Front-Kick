import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'; 


const Logo = () => {

    const navigate = useNavigate();

  return (
    <Button onClick={() => { navigate('/home'); }}>
        <IMG src='/assets/whitelogo.png' alt='logo'/>
    </Button>
  )
}

export default Logo

const IMG = styled.img`
  height: 30px;
`;

const Button = styled.button`
  background: transparent;
  border: none; 
  padding: 0; 
`;
