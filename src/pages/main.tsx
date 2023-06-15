import styled from "styled-components";
import React from 'react';
import Menu from "../components/Headerbar/Menu/Menu";
import { VscAccount } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import Banner from "../components/Banner/Banner";


type Props = {};

const Main = (props: Props) => {
  return (
     <div>
      <Banner></Banner>
     </div>

  )
  
};
export default Main;
