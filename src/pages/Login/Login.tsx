import LoginHeader from '../../components/Login/LoginHeader';
import styled from 'styled-components';
import KakaoForm from '../../components/Login/KakaoForm';
import { useNavigate } from 'react-router-dom';
type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  return (
    <LoginWrap>
      <LoginHeader />
      <LoginTitle>함께 가는 축구 여행, 킥킥</LoginTitle>
      <LoginBox>
        <KakaoForm />
        <EmailLoginBox
          onClick={() => {
            navigate('/emaillogin');
          }}
        >
          이메일 로그인
        </EmailLoginBox>
      </LoginBox>
      <TextBox>
        <div>아직 계정이 없으신가요?</div>
        <P
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </P>
      </TextBox>
    </LoginWrap>
  );
};
const LoginWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
`;
const LoginTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 5rem;
`;
const EmailLoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 60px;
  border-radius: 5px;
  background-color: #898989;
  cursor: pointer;
`;
const LoginBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
const TextBox = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const P = styled.p`
  font-weight: bold;
  cursor: pointer;
`;
export default Login;
