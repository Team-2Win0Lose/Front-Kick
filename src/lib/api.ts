// api.ts

import { AxiosError, AxiosResponse } from 'axios';
import client from './client';
import { AccompanyPost } from './interface';

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
  phone_number: string,
  gender: string,
  birth_date: string,
  agree_terms_of_service: boolean,
) => {
  try {
    const res = await client('/api/user/signup/', {
      method: 'post',
      data: {
        email,
        password,
        name,
        phone_number,
        gender,
        birth_date,
        agree_terms_of_service,
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

export const getMyAccompany = async (userId: number) => {
  try {
    const res = await client(`/api/myaccompany/${userId}`, {
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
export const getMyAccompany2 = async (userId: number) => {
  try {
    const res = await client(`/api/myaccompanyapply/${userId}`, {
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
export const getAccompanyDetail = async (postId: string) => {
  try {
    const res = await client(`/api/findaccompany/detail/${postId}`, {
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

//동행만들기 정보
export const Accomand_Post = async (data: AccompanyPost) => {
  const {
    host,
    img,
    title,
    date,
    stadium,
    homename,
    awayname,
    meetingPlace,
    meetingPlaceAddress,
    detailMeetingPlace,
    term,
    tag,
    minNum,
    maxNum,
    content,
    house,
    food,
    attraction,
  } = data;
  try {
    const res = await client('/api/recruitments/details', {
      method: 'post',
      data: {
        host,
        img,
        title,
        date,
        stadium,
        homename,
        awayname,
        meetingPlace,
        meetingPlaceAddress,
        detailMeetingPlace,
        term,
        tag,
        minNum,
        maxNum,
        content,
        house,
        food,
        attraction,
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
