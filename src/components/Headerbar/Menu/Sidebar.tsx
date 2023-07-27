import React, { useRef, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import RegisterTeam from '../../RegisterTeam/RegisterTeam';
import MyInfoBox from '../../MyInfo/MyInfoBox';

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();

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

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
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
          <Menu>내 예정 동행 (0)</Menu>
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
