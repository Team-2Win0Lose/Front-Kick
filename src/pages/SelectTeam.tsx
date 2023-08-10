import { useState } from 'react';
import styled from 'styled-components';
import TeamSlide from '../components/SelectTeam/TeamSlide';
import Base from '../components/SelectTeam/TeamInfo/Base';
import Ulsan from '../components/SelectTeam/TeamInfo/Ulsan';
import Pohang from '../components/SelectTeam/TeamInfo/Pohang';
import Seoul from '../components/SelectTeam/TeamInfo/Seoul';
import Jeju from '../components/SelectTeam/TeamInfo/Jeju';
import Jeonbuk from '../components/SelectTeam/TeamInfo/Jeonbuk';
import Daegu from '../components/SelectTeam/TeamInfo/Daegu';
import Daejeon from '../components/SelectTeam/TeamInfo/Daejeon';
import Gwangju from '../components/SelectTeam/TeamInfo/Gwangju';
import Incheon from '../components/SelectTeam/TeamInfo/Incheon';
import Suwon from '../components/SelectTeam/TeamInfo/Suwon';
import Gangwon from '../components/SelectTeam/TeamInfo/Gangwon';
import Suwonsamsung from '../components/SelectTeam/TeamInfo/Suwonsamsung';

type Props = {};
const tabs = [
  { index: 0, name: '기본 페이지', content: <Base /> },
  { index: 1, name: '울산현대축구단', content: <Ulsan /> },
  { index: 2, name: '포항스틸러스', content: <Pohang /> },
  { index: 3, name: 'FC서울', content: <Seoul /> },
  { index: 4, name: '제주유나이티드', content: <Jeju /> },
  { index: 5, name: '전북현대모터스', content: <Jeonbuk /> },
  { index: 6, name: '대구FC', content: <Daegu /> },
  { index: 7, name: '대전하나시티즌', content: <Daejeon /> },
  { index: 8, name: '광주FC', content: <Gwangju /> },
  { index: 9, name: '인천유나이티드', content: <Incheon /> },
  { index: 10, name: '수원FC', content: <Suwon /> },
  { index: 11, name: '강원FC', content: <Gangwon /> },
  { index: 12, name: '수원삼성', content: <Suwonsamsung /> },
];
const SelectTeam = (props: Props) => {
  const [tab, settab] = useState(0);

  return (
    <Wrap>
      <BodyContainer>
        <BodyHead>
          <TeamColor>팀컬러</TeamColor>
        </BodyHead>
        <HeadLogo>구단 로고</HeadLogo>
        <BodyBody>
          <TeamName>팀 이름</TeamName>
          <TeamInfo>
            <TeamCount>
              <Number>128</Number>
              <About>모집 중인 동행 팀</About>
            </TeamCount>
            <Dot></Dot>
            <Follower>
              <Number>12K</Number>
              <About>팔로워</About>
            </Follower>
            <Dot></Dot>
            <EndTeamCount>
              <Number>42</Number>
              <About>마감된 동행 팀</About>
            </EndTeamCount>
          </TeamInfo>
        </BodyBody>
      </BodyContainer>
    </Wrap>
  );
};
const Wrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BodyContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 264px;
  height: 360px;
  background-color: #d9d9d9;
  border-radius: 12px;
`;
const BodyHead = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  height: 120px;
  width: 264px;
  background-color: #cacaca;
  border-radius: 12px 12px 0 0;
`;
const TeamColor = styled.div`
  color: #929292;
  font-size: 14px;
  position: absolute;
  right: 16px;
  top: 14px;
`;
const HeadLogo = styled.div`
  z-index: 3;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  top: 24px;
  left: 42px;
  width: 180px;
  height: 180px;
  border: none;
  border-radius: 90px;
  background-color: #9b9b9b;
`;
const BodyBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  top: 120px;
  z-index: 2;
  width: 264px;
  height: 240px;
  padding: 0 25px 38px;
  background-color: #d9d9d9;
  border-radius: 12px;
  gap: 9px;
`;
const TeamName = styled.div`
  font-size: 18px;
  font-weight: medium;
`;
const TeamInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: #9b9b9b;
  border: none;
  border-radius: 100%;
`;
const TeamCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const Follower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const EndTeamCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const Number = styled.p`
  font-size: 20px;
  font-weight: bolder;
`;
const About = styled.p`
  font-size: 9px;
`;
export default SelectTeam;
