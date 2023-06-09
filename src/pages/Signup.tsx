import React from 'react';
import styled from 'styled-components';
import SignupForm from '../components/Signup/SignupForm';
import LoginHeader from '../components/Login/LoginHeader';

type Props = {};

const Signup = (props: Props) => {
  return (
    <Wrap>
      <LoginHeader />
      <SignupForm />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export default Signup;
