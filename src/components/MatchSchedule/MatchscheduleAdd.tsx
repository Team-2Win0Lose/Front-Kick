import React, { useState } from 'react';
import styled from 'styled-components';
import {AiFillPlusCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'; 



const MatchscheduleAdd= () => {

  const navigate = useNavigate();

  return (
      <CustomIcon onClick={() => { navigate('/createroom'); }}/>
    
  );

}

export default MatchscheduleAdd




const CustomIcon = styled(AiFillPlusCircle)`
  color: black;
  width: 50px;
  height: 50px;
`;

