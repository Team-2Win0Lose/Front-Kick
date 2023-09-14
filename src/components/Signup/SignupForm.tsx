import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import SelectBox from './SelectBox';
import Icon_checked from './asset/icon_checked';
import Icon_unchecked from './asset/icon_unchecked';
import Terms from './Terms';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signup } from '@/lib/api';
interface IAuthForm {
  email: string;
  name: string;
  phone_number: string;
  password: string;
  passwordConfirm: string;
  gender: string;
  birth_date: string;
  agree_terms_of_service: boolean;
  extraError?: string;
}

const SignupForm = (props: any) => {
  const navigate = useNavigate();
  const [isClicked, setisClicked] = useState(0);
  const handleClick = () => {
    setisClicked(isClicked + 1);
  };
  const isChecked = useSelector((state: any) => state.term.isAllChecked);
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

  const checkEffect = useEffect(() => {
    if (isChecked === true && isClicked !== 0) {
      navigate('/signup/onboarding');
    } else if (isChecked === false && isClicked !== 0) {
      alert('약관 동의를 해주세요');
    }
  }, [isClicked]);

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setselectedGender(event.target.value);
  };
  const dummySignUp = {
    email: 'whtmdgn1409@naver.com',
    name: '조승후',
    password: 'tmdgn-1409!',
    phone_number: '010-8239-3757',
    gender: '남성',
    birth_date: '1998-06-13',
    agree_terms_of_service: true,
  };
  const onValid = async (data: IAuthForm) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        'passwordConfirm', // 에러 핸들링할 input요소 name
        { message: '비밀번호가 일치하지 않습니다.' }, // 에러 메세지
        { shouldFocus: true }, // 에러가 발생한 input으로 focus 이동
      );
    } else {
      try {
        const {
          email,
          name,
          password,
          phone_number,
          gender,
          birth_date,
          agree_terms_of_service,
        } = dummySignUp;
        await signup(
          email,
          name,
          password,
          phone_number,
          gender,
          birth_date,
          agree_terms_of_service,
        );
      } catch (error) {
        console.error(error);
      }
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
      <FormTitle>입력사항</FormTitle>
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
            {...register('name', {
              required: '이름을 입력해주세요',
              minLength: {
                value: 3,
                message: '3글자 이상 입력해주세요.',
              },
              pattern: {
                value: /^[A-za-z0-9가-힣]{3,10}$/,
                message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
              },
            })}
            placeholder='이름을 입력해주세요.'
          />
          <Warn>{errors?.name?.message}</Warn>
          <PhoneNumberForm>
            <InputPhonenumber
              {...register('phone_number', {
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
          <Warn>{errors?.phone_number?.message}</Warn>
          <GenderWrap
            id='gender'
            {...register('gender', {
              required: true,
            })}
          >
            <RadioWrap id='male'>
              {selectedGender === 'male' ? (
                <Icon_checked />
              ) : (
                <Icon_unchecked />
              )}
              <span>남성</span>
            </RadioWrap>
            <RadioWrap id='female'>
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
            {...(register('birth_date'),
            {
              required: true,
            })}
          />
        </Field>
      </div>
      <Terms {...(register('agree_terms_of_service'), {})} />
      <SubmitBtn type='submit'>가입하기</SubmitBtn>
      {errors?.extraError?.message && <p>{errors?.extraError?.message}</p>}
    </Form>
  );
};

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  gap: 20px;
`;
const FormTitle = styled.h1`
  font-weight: bold;
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

const GenderWrap = styled.select`
  margin-bottom: 16px;
  display: flex;
  gap: 15px;
`;
const RadioWrap = styled.option`
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
