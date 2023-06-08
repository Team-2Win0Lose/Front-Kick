import React from 'react';
import styled from 'styled-components';
import { Kakao_API_KEY, Kakao_JS_KEY, Kakao_REDIRECT_URL } from '../../config';
type Props = {};

const KakaoForm = (props: Props) => {
  return (
    <div>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${Kakao_API_KEY}&redirect_uri=${Kakao_REDIRECT_URL}&response_type=code`}
      >
        <KakaoLoginButton src='public/assets/kakao_login_medium_wide.png' />
      </a>
    </div>
  );
};
const KakaoLoginButton = styled.img`
  width: 260px;
`;
export default KakaoForm;
