import styled from "styled-components";
import React from 'react';
import Menu from "../Headerbar/Menu/Menu";
import Logo from "../Headerbar/Logo";
import Account from "../Headerbar/Account"


const Header = () => {


    return (
      <Head>
            <Logo></Logo>
            <div style = {{display: 'flex'}}>
              <Account></Account>
              <Menu></Menu>
            </div>
      </Head>
     
    )
  }
  
export default Header 



const Head = styled.header`
  height: 100px;
  justify-content: space-between;
  top: 0;
  margin: 0px;
  display: flex;
  align-items: center;
  background: #1F1F45;
  overflow-x: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;