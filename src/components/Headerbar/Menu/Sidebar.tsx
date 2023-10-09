import React, { useRef, useEffect, useState, SetStateAction } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import RegisterTeam from '../../RegisterTeam/RegisterTeam';
import MyInfoBox from '../../MyInfo/MyInfoBox';
import ScheduledAccompany from '../../ScheduledAccompany/ScheduledAccompany';
import { useDispatch, useSelector } from 'react-redux';
import { autoCheck, logOutAction } from '@/feature/authSlice';
import axios from 'axios';
import { RootState } from '@/app/store';
import { profile } from '@/lib/api';
import { Profile } from '@/lib/interface';

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();
  const [profileData, setprofileData] = useState<Profile>();
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);
  const { token, id } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await profile(id);
        setprofileData(res as SetStateAction<Profile | undefined>);
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchData();
  }, [id]);
  // console.log(profileData);

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
            Authorization: `Bearer ${token}`,
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
    <>
      {isOpen && <Backdrop onClick={toggleSide} />}

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
            <MyInfoBox
              profileImg={profileData?.profileImg}
              name={profileData?.name}
              nickname={profileData?.nickname}
              email={profileData?.email}
            />
          </DIV>
          <DIV>
            <Menu>나의 응원팀</Menu>
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
    </>
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
  background-color: #1f1f45;
  height: 100%;
  width: 25%;
  right: -25%;
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
  position: absolute;
  bottom: 50px;
  right: 50px;
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

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경색과 투명도 조절 */
  z-index: 4; /* 배경 레이어가 사이드바 레이어 위에 나타나도록 설정 */
`;
