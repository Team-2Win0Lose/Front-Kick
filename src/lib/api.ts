// api.ts

import { AxiosError, AxiosResponse } from 'axios';
import client from './client';

// 로그인 요청을 보내는 함수
export const login = async (email: string, password: string) => {
  try {
    const res = await client('/api/user/login', {
      method: 'post',
      data: {
        email,
        password,
      },
    });
    return {
      data: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error?.response?.data,
      };
    }
  }
};

// 다른 API 요청들을 필요에 따라 추가할 수 있습니다.
// 예를 들어 회원 가입, 로그아웃, 사용자 정보 조회 등의 기능을 추가할 수 있습니다.
export const signup = async (
  email: string,
  password: string,
  name: string,
  phonenumber: string,
  gender: string,
) => {
  try {
    const res = await client('/api/user/signup', {
      method: 'post',
      data: {
        email,
        password,
        name,
        phonenumber,
        gender,
      },
    });
    return { data: res.data };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error?.response?.data,
      };
    }
  }
};

export const getTeam = async () => {
  try {
    const res = await client('/api/teams', {
      method: 'get',
    });
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error?.response?.data,
      };
    }
  }
};
