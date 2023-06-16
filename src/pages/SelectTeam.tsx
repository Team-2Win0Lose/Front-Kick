import { useState } from 'react';
import styled from 'styled-components';
import TeamSlide from '../components/SelectTeam/TeamSlide';
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
  { index: 0, name: '기본 페이지', content: <div>기본</div> },
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
  const handleTab = (state: number) => {
    settab(state);
  };
  return (
    <Wrap>
      <TeamSlide handleTab={handleTab} />
      <BodyContainer>{tabs[tab].content}</BodyContainer>
    </Wrap>
  );
};
const Wrap = styled.div`
  background-color: #1f1f45;
`;
const BodyContainer = styled.div``;
export default SelectTeam;
