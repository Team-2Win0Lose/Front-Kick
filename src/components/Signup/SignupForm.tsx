import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import SelectBox from './SelectBox';
import Icon_checked from './asset/icon_checked';
import Icon_unchecked from './asset/icon_unchecked';

interface IAuthForm {
  email: string;
  nickname: string;
  phonenumber: string;
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
  const [selectedGender, setselectedGender] = useState<string>('male');
  const handleDateChange = (year: number, month: number, day: number) => {
    // 선택된 생년월일 값들을 처리하는 로직을 작성합니다.
    console.log('Year:', year);
    console.log('Month:', month);
    console.log('Day:', day);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setselectedGender(event.target.value);
  };

  const onValid = (data: IAuthForm) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        'passwordConfirm', // 에러 핸들링할 input요소 name
        { message: '비밀번호가 일치하지 않습니다.' }, // 에러 메세지
        { shouldFocus: true }, // 에러가 발생한 input으로 focus 이동
      );
    }
  };

  const autoHyphen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    target.value = target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/(\-{1,2})$/g, '');
  };

  let now = new Date();
  let nowYear = now.getFullYear();
  let nowMonth = now.getMonth() + 1;
  let nowDay = now.getDate();
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <p>입력사항</p>
      <div>
        <Field>
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
          <PhoneNumberForm>
            <InputPhonenumber
              {...register('phonenumber', {
                required: '휴대폰 번호를 올바르게 입력해주세요.',
                pattern: {
                  value: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,
                  message: '휴대폰 번호를 올바르게 입력해주세요.',
                },
              })}
              onInput={autoHyphen}
              placeholder='휴대폰 번호를 입력해주세요.'
            />
            <AuthBtn>인증 요청</AuthBtn>
          </PhoneNumberForm>
          <Warn>{errors?.phonenumber?.message}</Warn>
          <GenderWrap>
            <RadioWrap id='male'>
              <input
                type='radio'
                value='male'
                name='gender'
                checked={selectedGender === 'male'}
                onChange={handleGenderChange}
              />
              {selectedGender === 'male' ? (
                <Icon_checked />
              ) : (
                <Icon_unchecked />
              )}
              <span>남성</span>
            </RadioWrap>
            <RadioWrap id='female'>
              <input
                type='radio'
                value='female'
                name='gender'
                checked={selectedGender === 'female'}
                onChange={handleGenderChange}
              />
              {selectedGender === 'female' ? (
                <Icon_checked />
              ) : (
                <Icon_unchecked />
              )}

              <span>여성</span>
            </RadioWrap>
          </GenderWrap>
          <SelectBox
            year={nowYear}
            month={nowMonth}
            day={nowDay}
            onChange={handleDateChange}
          />
        </Field>
      </div>

      <SubmitBtn type='submit'>가입하기</SubmitBtn>
      {errors?.extraError?.message && <p>{errors?.extraError?.message}</p>}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  gap: 30px;
`;
const Field = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
  background-color: #e7e7e7;
  border-radius: 17px;
  padding: 20px 17px;
`;
const Input = styled.input`
  width: 275px;
  height: 48px;
  border: none;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  border-radius: 12px;
  padding: 18px 16px;
  background-color: #d9d9d9;
`;
const PhoneNumberForm = styled.div`
  width: 275px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));

  border-radius: 12px;
`;
const InputPhonenumber = styled.input`
  width: 210px;
  height: 48px;
  border: none;
  border-radius: 12px;
  padding: 18px 16px;
  background-color: #d9d9d9;
`;
const AuthBtn = styled.button`
  width: 51px;
  height: 24px;
  color: white;
  background-color: #898989;
  border-radius: 21px;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-right: 10px;
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

const GenderWrap = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 15px;
`;
const RadioWrap = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  input {
    display: none;
  }
  span {
    margin-left: 4px;
    margin-top: 1px;
  }
`;
export default SignupForm;
