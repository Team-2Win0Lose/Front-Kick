import styled from "styled-components";
import React from 'react';
import Menu from "../Headerbar/Menu/Menu";
import Logo from "../Headerbar/Logo";
import Account from "../Headerbar/Account"
import Navbar from "../Headerbar/Navbar/Navbar";


const Header = () => {


    return (
      <div>
        <Head>
              <Logo></Logo>
              <div style = {{display: 'flex'}}>
                <Account></Account>
                <Menu></Menu>
              </div>
        </Head>
        <Navbar></Navbar>
      </div>
    )
  }
  
export default Header 



const Head = styled.header`
  height: 100%;
  justify-content: space-between;
  top: 0;
  margin: 0px;
  display: flex;
  align-items: center;
  background: #FFFFFF;
  //background: #1F1F45;
  overflow-x: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;