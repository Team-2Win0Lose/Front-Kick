import React from 'react';
import styled from 'styled-components';

type Props = {};

const LoginHeader = (props: Props) => {
  return (
    <Header>
      <Logos>
        <IMG src='public/assets/totalLogo.svg' alt='logo' />
      </Logos>
    </Header>
  );
};
const Header = styled.div`
  margin-top: 50px;
  width: 175px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const Logos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const IMG = styled.img`
  /* width: 60px;
  height: 59.02px; */
`;
const Kick = styled.p`
  font-size: 45px;
  font-weight: 700;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const Slogan = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
export default LoginHeader;
