import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import RegisterTeam from '../components/RegisterTeam/RegisterTeam';
import BannerCarousel from '../components/Banner/BannerCarousel';
import TeamCard from '../components/TeamRating/TeamCard';
import { useSelector } from 'react-redux';
import { autoCheck } from '@/feature/authSlice';
import TeamCardCarousel from '@/components/TeamRating/TeamCardCarousel';
import FindAccompany from './FindAccompany';
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
      <Container>
        <Title>
          🏆 구단별 응원순위
        </Title>
        <SubTitle>
            구단별 모집이 완료된 동행팀 수
        </SubTitle>
        <TeamCardCarousel/>
      </Container>
      <Container>
        <Title>
            🙋‍♂️ 동행 구경하기
          </Title>
          <SubTitle>
            나의 동행을 찾아보세요!
          </SubTitle>
        <FindAccompany/>
      </Container>

    </div>
  );
};
export default Main;

const BannerCarouselContainer = styled.div`
  height: auto;
  overflow: hidden;
`;

const Container = styled.div`
  display : flex;
  flex-direction: column;
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

const Title = styled.div`
  border: 1px;
  font-size: 25px;
  margin-left: 20px;
  margin-Top: 50px;
  margin-bottom: 10px;

`;

const SubTitle = styled.div` 
  font-size: 18px;
  margin-left: 20px;
  margin-bottom: 30px;
`;