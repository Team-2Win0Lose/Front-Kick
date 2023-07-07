import styled from 'styled-components';
type Props = {};

const FindId = (props: Props) => {
  return (
    <Form>
      <Logo />
      <TextForm>
        <Title>아이디 / 이메일 찾기</Title>
        <Subtitle>가입 시 사용했던 휴대폰 번호를 입력해주세요.</Subtitle>
      </TextForm>
      <PhonenumberForm>
        <Input placeholder='휴대폰 번호' />
        <Button>인증하기</Button>
      </PhonenumberForm>
      <AuthForm>
        <Input placeholder='인증번호입력' />
        <Button>인증확인</Button>
      </AuthForm>
    </Form>
  );
};
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img``;
const TextForm = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`;
const Subtitle = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;
const PhonenumberForm = styled.div`
  margin-top: 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
const AuthForm = styled.div`
  margin-top: 2rem;
  gap: 1rem;

  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 339px;
  height: 55px;
  border: 1px solid #818181;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  border-radius: 12px;
  padding: 18px 16px;
`;
const Button = styled.button`
  background-color: #1f1f45;
  width: 339px;
  height: 55px;
  border: none;
  border-radius: 12px;
  color: white;
`;
export default FindId;
