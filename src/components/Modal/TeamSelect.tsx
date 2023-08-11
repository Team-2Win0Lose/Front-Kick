import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTeamFilter,
  removeTeamFilter,
  clearTeamFilters,
} from '@/feature/teamFilterSlice';
import { closeModal } from '@/feature/ModalSlice';
import { teamCheck } from '../../feature/teamFilterSlice';
import { getTeam } from '@/lib/api';
import { useEffect, useState } from 'react';
import { GetTeamType, GetTeamList } from '@/lib/interface';

type Props = {};

interface BoxProps {
  backgroundColor: boolean;
}

const TeamSelect = (props: Props) => {
  const [teamList, setteamList] = useState<GetTeamList>();
  const dispatch = useDispatch();
  const teamFilters = useSelector(
    (state: teamCheck) => state.teamfilter.teamNames,
  );
  // 박스 클릭 시, state 내의 팀 이름이 있는지 없는지 판별 후 redux에 추가, 삭제
  const handleBoxClick = (teamName: string) => {
    if (teamFilters.includes(teamName)) {
      dispatch(removeTeamFilter(teamName));
    } else {
      dispatch(addTeamFilter(teamName));
    }
  };
  // api에서 team 목록 불러오기
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getTeam();
        setteamList(response);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);
  // redux state에 저장된 팀들 전부 삭제
  const handleClearFilters = () => {
    dispatch(clearTeamFilters());
    console.log(teamFilters);
  };
  return (
    <Wrap>
      <Container>
        {teamList?.data.map((team: GetTeamType) => (
          <Box
            backgroundColor={teamFilters.includes(team.teamName)}
            key={team.teamGrade}
            onClick={() => handleBoxClick(team.teamName)}
          >
            <Logo src={team.teamImg} />
            <Name>{team.teamName}</Name>
          </Box>
        ))}
      </Container>
      <ButtonBox>
        <Button onClick={handleClearFilters}>필터 지우기</Button>
        <Button onClick={() => dispatch(closeModal())}>찾기</Button>
      </ButtonBox>
    </Wrap>
  );
};

const Button = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 25px;
  background-color: #272727;
  color: white;
  border-radius: 12px;
`;
const ButtonBox = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  width: 80%;
  height: 547px;
  background-color: #fff;
  border: none;
  z-index: 10000;
  padding: 50px 24px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 12px;
  gap: 10px;
`;
const Container = styled.div`
  width: 312px;
  padding: 300px 9px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
`;
const Box = styled.div<BoxProps>`
  padding: 10px;
  width: 140px;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${(props) => (props.backgroundColor ? '#A4BBF9' : 'white')};
  border: ${(props) =>
    props.backgroundColor ? '1px solid #fff' : '1px solid #d9d9d9'};
  color: ${(props) => (props.backgroundColor ? 'white' : 'black')};
`;
const Logo = styled.img`
  width: 80px;
  height: 80px;
`;
const Name = styled.p`
  font-size: 10px;
  font-weight: bold;
`;
export default TeamSelect;
