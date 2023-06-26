import React from 'react';
import { dummyTeams } from '../../../../public/dummy/dummyTeams';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { register } from '../../../feature/TeamSlice';
import { useNavigate } from 'react-router-dom';
type Props = {};

const Jeonbuk = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Wrap>
      {dummyTeams.map((team, idx) =>
        team.teamName === '전북 현대 모터스' ? (
          <Form key={idx}>
            <TeamImg src={team.teamImg} />
            <TeamHead>
              <TeamTitle>{team.teamName}</TeamTitle>
              <TeamGrade>{team.teamGrade}</TeamGrade>
            </TeamHead>
            <TeamInfo>
              <InfoContainer>
                <Info>경기장</Info>
                <StadiumName>{team.teamStadium}</StadiumName>
              </InfoContainer>
              <InfoContainer>
                <Info>구단 카드 소지자</Info>
                <Info>{team.teamCardOwner} 명</Info>
              </InfoContainer>
              <InfoContainer>
                <Info>성사된 동행 수</Info>
                <Info>{team.totalMatching} 개</Info>
              </InfoContainer>
            </TeamInfo>
            <Select
              onClick={() => (dispatch(register(team)), navigate('/home'))}
            >
              선택하기
            </Select>
          </Form>
        ) : null,
      )}
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 80%;
  height: 100vh;
  margin: 20px auto;
`;
const Form = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TeamImg = styled.img`
  height: 144px;
`;
const TeamHead = styled.div`
  margin-top: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
`;
const TeamTitle = styled.p`
  font-weight: 700;
  font-size: 40px;
`;
const TeamGrade = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #2149d3;
  white-space: nowrap;
`;
const TeamInfo = styled.div`
  margin-top: 12px;
  border: 1px solid #000000;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5px;
  gap: 5px;
`;
const Info = styled.p`
  font-weight: 400;
  font-size: 14px;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 120px;
`;
const StadiumName = styled.p`
  font-weight: 700;
  font-size: 14px;
`;
const Select = styled.button`
  margin-top: 100px;
  background: #ffffff;
  border: 1px solid #1f1f45;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;
export default Jeonbuk;
