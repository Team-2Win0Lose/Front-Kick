import styled from 'styled-components';
import Menu from '../Headerbar/Menu/Menu';
import Logo from '../Headerbar/Logo';
import Account from '../Headerbar/Account';
import Navbar from '../Headerbar/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { autoCheck } from '@/feature/authSlice';

const Header = () => {
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);

  return isLogin ? (
    <div>
      <Head>
        <Logo></Logo>
        <div style={{ display: 'flex' }}>
          <Account></Account>
          <Menu></Menu>
        </div>
      </Head>
      <Navbar></Navbar>
    </div>
  ) : (
    <div>
      <Head>
        <Logo></Logo>
        <div style={{ display: 'flex' }}>
          <Account></Account>
        </div>
      </Head>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;

const Head = styled.header`
  height: 100%;
  justify-content: space-between;
  top: 0;
  margin: 0px;
  display: flex;
  align-items: center;
  background: #ffffff;
  //background: #1F1F45;
  overflow-x: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
