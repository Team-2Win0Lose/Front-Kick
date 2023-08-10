import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTeamFilter,
  removeTeamFilter,
  clearTeamFilters,
} from '@/feature/teamFilterSlice';
import { RootState } from '../../app/store'; // RootState는 Redux 스토어의 전체 상태 타입입니다.
import { getTeam } from '@/lib/api';
import { useEffect, useState } from 'react';
import { GetTeamList } from '@/lib/interface';
type Props = {};
interface BoxProps {
  backgroundColor: boolean;
}
const TeamSelect = (props: Props) => {
  const [teamList, setteamList] = useState<GetTeamList | undefined>();
  const dispatch = useDispatch();
  const teamFilters = useSelector(
    (state: RootState) => state.teamfilter.teamNames,
  );
  const handleBoxClick = (teamName: string) => {
    if (teamFilters.includes(teamName)) {
      dispatch(removeTeamFilter(teamName));
    } else {
      dispatch(addTeamFilter(teamName));
    }
  };
  useEffect(() => {
    async function fetchData() {
      const getTeamList = await getTeam();
      setteamList(getTeamList);
    }
    fetchData();
  });

  const handleClearFilters = () => {
    dispatch(clearTeamFilters());
  };
  return (
    <Wrap>
      <Wrap>
        <Container>
          {teamList?.data.map((team) => (
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
      </Wrap>
      <button onClick={handleClearFilters}>필터 지우기</button>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
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
`;
const Container = styled.div`
  width: 312px;
  padding: 120px 9px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
`;
const Box = styled.div<BoxProps>`
  width: 140px;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${(props) => (props ? 'green' : 'white')};
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
