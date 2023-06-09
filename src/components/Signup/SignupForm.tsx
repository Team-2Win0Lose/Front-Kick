import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
interface IAuthForm {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  extraError?: string;
}

const SignupForm = (props: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<IAuthForm>({ mode: 'onBlur' });

  const onValid = (data: IAuthForm) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        'passwordConfirm', // 에러 핸들링할 input요소 name
        { message: '비밀번호가 일치하지 않습니다.' }, // 에러 메세지
        { shouldFocus: true }, // 에러가 발생한 input으로 focus 이동
      );
    }
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Field>
        <Input
          {...register('nickname', {
            required: '닉네임을 입력해주세요',
            minLength: {
              value: 3,
              message: '3글자 이상 입력해주세요.',
            },
            pattern: {
              value: /^[A-za-z0-9가-힣]{3,10}$/,
              message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
            },
          })}
          placeholder='닉네임을 입력해주세요.'
        />
        <Warn>{errors?.nickname?.message}</Warn>
        <Input
          {...register('email', {
            required: '이메일을 올바르게 입력해주세요.',
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: '이메일을 올바르게 입력해주세요.',
            },
          })}
          placeholder='이메일을 입력해주세요.'
        />
        <Warn>{errors?.email?.message}</Warn>
        <Input
          type='password'
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message:
                '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:
                '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
            },
          })}
          placeholder='비밀번호를 입력해주세요.'
        />
        <Warn>{errors?.password?.message}</Warn>

        <Input
          type='password'
          {...register('passwordConfirm', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message:
                '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
            },
          })}
          placeholder='비밀번호를 한번 더 입력해주세요.'
        />
        <Warn>{errors?.passwordConfirm?.message}</Warn>
      </Field>
      <SubmitBtn type='submit'>회원가입</SubmitBtn>
      {errors?.extraError?.message && <p>{errors?.extraError?.message}</p>}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const Field = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const Warn = styled.p`
  width: 320px;
  font-size: 14px;
  color: red;
`;
const SubmitBtn = styled.button`
  width: 339px;
  height: 55px;
  background: #1f1f45;
  border: #1f1f45;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`;
export default SignupForm;
