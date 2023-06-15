import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import { VscAccount } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import News from '../components/News/News';
import RegisterTeam from '../components/RegisterTeam/RegisterTeam';

type Props = {};

const Main = (props: Props) => {
  const [isLogin, setisLogin] = useState(false);
  return (
    <div>
      <RegisterTeam />

      <News />
    </div>
  );
};
export default Main;
