import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import RegisterTeam from '../components/RegisterTeam/RegisterTeam';
import BannerCarousel from '../components/Banner/BannerCarousel';
import TeamCard from '../components/TeamRating/TeamCard';
import { useSelector } from 'react-redux';
import { autoCheck } from '@/feature/authSlice';
type Props = {};

const Main = (props: Props) => {

  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);

  return (
    <div>
      {
        isLogin ? (
          <div>
            <P>
              👋 현재 나의 동행일정 (0)
            </P>
            <Mypage>
            </Mypage>
          </div>
      ) : (
        <>
        </>
      )}
      <BannerCarouselContainer>
        <BannerCarousel />
      </BannerCarouselContainer>
      <TeamCardContainer>
        <TeamCard />
      </TeamCardContainer>
    </div>
  );
};
export default Main;

const BannerCarouselContainer = styled.div`
  height:auto;
  overflow: hidden;
`;

const TeamCardContainer = styled.div`
  height: 500px;
  overflow-x: hidden;
`;

const P = styled.div`
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const Mypage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background: #eae9e9;
  margin: 10px;
  border-radius: 40px;
`;