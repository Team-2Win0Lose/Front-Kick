import { useState } from 'react';
import styled from 'styled-components';


type SelectTeamCardProps = {
  teamName: string | null;
  teamcolor: string;
  logo: string;
  name: string;
  ing: number;
  follower: number;
  end: number;
};

const SelectTeamCard = (props: SelectTeamCardProps) => {

  return (
    <Wrap>
      <BodyContainer>
        <BodyHead teamcolor={props.teamcolor}></BodyHead>
        <HeadLogo logo={props.logo}></HeadLogo>
        <BodyBody>
          <TeamName>{props.name}</TeamName>
          <TeamInfo>
            <TeamCount>
              <Number>{props.ing}</Number>
              <About>모집 중인 동행 팀</About>
            </TeamCount>
            <Dot></Dot>
            <Follower>
              <Number>{props.follower}</Number>
              <About>팔로워</About>
            </Follower>
            <Dot></Dot>
            <EndTeamCount>
              <Number>{props.end}</Number>
              <About>마감된 동행 팀</About>
            </EndTeamCount>
          </TeamInfo>
        </BodyBody>
      </BodyContainer>
    </Wrap>
  );
};

export default SelectTeamCard;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#FFFFFF;
`;
const BodyContainer = styled.div`
  margin-top:20px;
  margin-bottom:20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 264px;
  height: 360px;
  background-color: #d9d9d9;
  border-radius: 12px;
`;
const BodyHead = styled.div<{ teamcolor: string }>`
  z-index: 1;
  position: absolute;
  top: 0;
  height: 120px;
  width: 264px;
  background-color: ${({ teamcolor }) => teamcolor};
  border-radius: 12px 12px 0 0;
`;

const HeadLogo = styled.div<{ logo: string }>`
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
  background-image: url(${({ logo }) => logo}); 
  background-size: cover; 
  background-repeat: no-repeat; 
  background-color: transparent; 
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
  padding: 0 25px 50px;
  background-color: #d9d9d9;
  border-radius: 12px;
  gap: 9px;
`;
const TeamName = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-weight: medium;
  color: #000000;
  margin-bottom: 20px;
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
  font-size: 15px;
  font-weight: bolder;
`;
const About = styled.p`
  font-size: 10px;
`;