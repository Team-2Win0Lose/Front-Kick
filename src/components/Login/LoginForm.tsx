import React, { useRef, useState } from 'react';
import { useForm, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

interface FormValue {
  email: string;
  password: string;
}

const LoginForm = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    //api 호출
    console.log(data);
  };
  const onError: SubmitErrorHandler<FormValue> = (error) => {
    console.log(error);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <DivForm>
        <Input
          id='email'
          type='text'
          placeholder='이메일 또는 아이디'
          {...register('email', {
            required: true,
          })}
        />
        <Input
          id='password'
          type='password'
          placeholder='비밀번호'
          {...register('password', {
            required: true,
          })}
        />
        <SignUp>
          <Find>회원가입</Find>
          <Find>아이디/비밀번호 찾기</Find>
        </SignUp>
      </DivForm>

      <Button type='submit'>로그인</Button>
    </Form>
  );
};

const Form = styled.form`
  margin-top: 75px;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;
const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
`;
const Input = styled.input`
  width: 339px;
  height: 55px;
  border: 1px solid #818181;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  border-radius: 12px;
  padding: 18px 16px;
`;
const SignUp = styled.div`
  width: 339px;
  justify-content: end;
  padding: 0;
  display: flex;
  gap: 5px;
`;
const Find = styled.a`
  font-weight: 400;
  font-size: 14px;
`;
const Button = styled.button`
  width: 339px;
  height: 55px;
  background: #1f1f45;
  border: #1f1f45;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`;
export default LoginForm;
