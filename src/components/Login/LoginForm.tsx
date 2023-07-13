import React, { useRef, useState } from 'react';
import { useForm, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
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
    getValues,
  } = useForm<FormValue>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValue> = (data) => {
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
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
        />
        {errors.email && <small role='alert'>{errors.email.message}</small>}
        <Input
          id='password'
          type='password'
          placeholder='비밀번호'
          {...register('password', {
            required: '비밀번호는 필수 입력입니다.',
            minLength: {
              value: 7,
              message: '7자리 이상 비밀번호를 입력하세요.',
            },
            validate: {
              check: (val) => {
                if (getValues('password') !== val) {
                  return '비밀번호가 일치하지 않습니다.';
                }
              },
            },
          })}
        />
        {errors.password && (
          <small role='alert'>{errors.password.message}</small>
        )}
        <SignUp>
          <Find to='/signup'>회원가입</Find>
          <Find to='/find/id'>아이디 찾기</Find>
          <Find to='/find/password'>비밀번호 찾기</Find>
        </SignUp>
        <Button type='submit'>로그인</Button>
      </DivForm>
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
  justify-content: space-between;
  padding: 0;
  display: flex;
  gap: 5px;
`;
const Find = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  color: black;
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
