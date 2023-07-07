import styled from 'styled-components';
import LoginForm from '../../components/Login/LoginForm';
import KakaoForm from '../../components/Login/KakaoForm';
import LoginHeader from '../../components/Login/LoginHeader';
type Props = {};

const Login = (props: Props) => {
  return (
    <Wrap>
      <LoginHeader />
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
  gap: 25px;
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
