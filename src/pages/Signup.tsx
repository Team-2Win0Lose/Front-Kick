import React from 'react';
import styled from 'styled-components';
import SignupForm from '../components/Signup/SignupForm';
import LoginHeader from '../components/Login/LoginHeader';

type Props = {};

const Signup = (props: Props) => {
  return (
    <Wrap>
      <Title>회원가입</Title>
      <SignupForm />
    </Wrap>
  );
};
const Title = styled.p`
  font-size: 27px;
  font-weight: 700;
  margin-top: 30px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export default Signup;
