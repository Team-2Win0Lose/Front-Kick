import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const activeStyle = {
    color: '#000000',
    fontweight: 900,
    textDecoration: 'none',
  };
  const defaultStyle = {
    color: '#807e7e',
    fontWeight: 900,
    textDecoration: 'none',
  };

  return (
    <Wrap>
      <DIV>
        <InfoBox>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            to='/home'
          >
            홈
          </NavLink>
        </InfoBox>
      </DIV>
      <DIV>
        <InfoBox>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            to='/findaccompany'
          >
            동행 구하기
          </NavLink>
        </InfoBox>
      </DIV>
      <DIV>
        <InfoBox>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            to='/createroom'
          >
            동행 만들기
          </NavLink>
        </InfoBox>
      </DIV>
      <DIV>
        <InfoBox>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            to='/myaccompany'
          >
            내 동행
          </NavLink>
        </InfoBox>
      </DIV>
    </Wrap>
  );
};

export default Navbar;

const InfoBox = styled.div`
  font-size: 16px;
`;

const Wrap = styled.div`
  font-weight: bold;
  background-color: #ffffff;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px;
`;

const DIV = styled.div`
  margin-right: 20px;
`;
