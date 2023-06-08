import styled from 'styled-components';
import LoginForm from '../components/Login/LoginForm';
import KakaoForm from '../components/Login/KakaoForm';
type Props = {};

const Login = (props: Props) => {
  return (
    <Wrap>
      <Header>
        <Logos>
          <IMG src='public/assets/logo.svg' alt='logo' />
          <Kick>킥킥</Kick>
        </Logos>
        <Slogan>K리그, 함께 떠나고 즐기자</Slogan>
      </Header>
      <Main>
        <LoginForm />
        <Partition>
          <Line></Line>
          <Txt>다른 방법으로 로그인하기</Txt>
          <Line></Line>
        </Partition>
        <KakaoForm />
      </Main>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
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
  width: 60px;
  height: 59.02px;
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
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 55px;
`;

const Partition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;
const Line = styled.div`
  width: 75px;
  height: 0px;
  border: 0.6px solid #a39797;
`;
const Txt = styled.p`
  color: #757171;
  font-weight: 400;
  font-size: 12px;
`;
export default Login;
