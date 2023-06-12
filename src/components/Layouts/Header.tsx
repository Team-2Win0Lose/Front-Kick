import styled from "styled-components";
import React from 'react';
import Menu from "../Menu/Menu";
import { VscAccount } from 'react-icons/vsc';
import { NavLink, useNavigate } from 'react-router-dom'; 
import Back from '/assets/background.png'



const Header = () => {

    const navigate = useNavigate();

    return (
      <Head>
            <IMG src='public/assets/whitelogo.png' alt='logo' />
            <div style = {{display: 'flex'}}>
                <Button onClick={() => { navigate('/login'); }}>
                    <VscAccount/>
                </Button>
                <Menu></Menu>
                {/* <NavLink to="/" className={({isActive})=>isActive? "okay" : ""}></NavLink> */}
            
               
            </div>
      </Head>
     
    )
  }
  
export default Header 

const IMG = styled.img`
  height: 30px;
`;

const Button = styled.button`

`;

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