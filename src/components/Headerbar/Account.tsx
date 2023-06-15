import React from 'react';
import styled from "styled-components";
import { VscAccount } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom'; 

const Account = () => {

    const navigate = useNavigate();

  return (
    <Button onClick={() => { navigate('/login'); }}>
                <VscAccount/>
              </Button>
  )
}

export default Account

const Button = styled.button`
  
`;
