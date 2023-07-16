import React from 'react';
import styled from "styled-components";
import { VscAccount } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom'; 

const Account = () => {

    const navigate = useNavigate();

  return (
      <CustomIcon onClick={() => { navigate('/login'); }}/>

  )
}

const CustomIcon = styled(VscAccount)`
  //color: white;
  width: 40px;
  height: 40px;
  margin-right: 20px;

`;

export default Account
