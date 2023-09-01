import React, { useRef, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import RegisterTeam from '../../RegisterTeam/RegisterTeam';
import MyInfoBox from '../../MyInfo/MyInfoBox';
import ScheduledAccompany from '../../ScheduledAccompany/ScheduledAccompany';
import { useDispatch, useSelector } from 'react-redux';
import { autoCheck, logOutAction } from '@/feature/authSlice';
import axios from 'axios';
import { RootState } from '@/app/store';

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);
  const access_token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };
  const KakaoLogout = () => {
    axios
      .post(
        `https://kapi.kakao.com/v1/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then((res: any) => {
        console.log(res);
      })
      .catch((Error: any) => {
        console.error(Error);
      });
  };
  const toggleSide = () => {
    setIsOpen(false);
  };

  return isLogin ? (
    <SideBarWrap id='sidebar' ref={outside} className={isOpen ? 'open' : ''}>
      <AiOutlineClose
        size='30'
        color='#ffffff'
        alt='close'
        onClick={toggleSide}
        onKeyDown={toggleSide}
      />

      <ul>
        <DIV>
          <Menu>내 정보</Menu>
          <MyInfoBox />
        </DIV>
        <DIV>
          <Menu>나의 응원팀</Menu>
          <RegisterTeam />
        </DIV>
        <DIV>
          <Menu>알림 (0)</Menu>
          <ScheduledAccompany></ScheduledAccompany>
        </DIV>
        <Logout>
          <LogoutBtn
            onClick={() => {
              dispatch(logOutAction()), toggleSide(), KakaoLogout();
            }}
          >
            로그아웃
          </LogoutBtn>
        </Logout>
      </ul>
    </SideBarWrap>
  ) : (
    <SideBarWrap id='sidebar' ref={outside} className={isOpen ? 'open' : ''}>
      <AiOutlineClose
        size='30'
        color='#ffffff'
        alt='close'
        onClick={toggleSide}
        onKeyDown={toggleSide}
      />

      <ul>
        <DIV onClick={() => toggleSide()}>
          <Menu>내 정보</Menu>
          <MyInfoBox />
        </DIV>
      </ul>
    </SideBarWrap>
  );
}

export default Sidebar;

const SideBarWrap = styled.div`
  z-index: 5;
  padding: 10px;
  border-radius: 15px 0 0 15px;
  background-color: #1f1f45;
  height: 100%;
  width: 90%;
  right: -90%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const Menu = styled.li`
  margin: 15px 0px;
  font-size: 1rem;
  color: #ffffff;
`;

const DIV = styled.div`
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Logout = styled.div`
  width: 85%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const LogoutBtn = styled.div`
  width: 80px;
  padding: 10px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  color: white;
  border-radius: 12px;
`;
