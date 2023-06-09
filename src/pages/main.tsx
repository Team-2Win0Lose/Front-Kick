import styled from "styled-components";
import React from 'react';
import Menu from "../components/Menu";
import { VscAccount } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom'; 


type Props = {};

const Main = (props: Props) => {
  return (
        
  <div style = {{display: 'flex'}}>
    <li><NavLink to="/" className={({isActive})=>isActive? "okay" : ""}> <VscAccount/></NavLink></li>
    <Menu />
  </div>

  )
  
};
export default Main;
