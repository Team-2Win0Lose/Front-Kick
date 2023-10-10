import { teamnameConvertImg } from '@/util/teamnameConvertImg';
import { useState } from 'react';
import styled from 'styled-components';


type SelectTeamCardProps = {
  original_team_name: string;
  follower: number;
  recruit_ing: number;
  team_name: string;
  logo_img_url: string;
  team_color_main: string;
  team_color_sub: string;
  recruit_end: number;
};

const SelectTeamCard = (props: SelectTeamCardProps) => {

  return (
    <Wrap>
      <BodyContainer teamcolor={props?.team_color_sub}>
        <BodyHead teamcolor={props?.team_color_main}>
        </BodyHead>
        <HeadLogo>
          <IMG src={teamnameConvertImg(props?.logo_img_url)} />
        </HeadLogo>
        <BodyBody>
          <TeamName>{props?.team_name}</TeamName>
          <TeamInfo>
            <TeamCount>
              <Number>{props?.recruit_ing}</Number>
              <About>모집 중인 동행 팀</About>
            </TeamCount>
            <Dot></Dot>
            <Follower>
              <Number>{props?.follower}</Number>
              <About>팔로워</About>
            </Follower>
            <Dot></Dot>
            <EndTeamCount>
              <Number>{props?.recruit_end}</Number>
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
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#FFFFFF;
`;
const BodyContainer = styled.div<{ teamcolor: string }>`
  margin-top:20px;
  margin-bottom:20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 264px;
  height: 360px;
  background-color: ${(props) => props.teamcolor || '#FFFFFF'};
  border-radius: 12px;
`;
const BodyHead = styled.div<{ teamcolor: string }>`
  z-index: 1;
  position: absolute;
  top: 0;
  height: 120px;
  width: 264px;
  background-color: ${(props) => props.teamcolor || '#FFFFFF'};
  border-radius: 12px 12px 0 0;
`;

const HeadLogo = styled.div`
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  object-fit: cover;
  font-weight: bold;
  margin-bottom: 120px;
  width: 180px;
  height: 180px;
  border: none;
  border-radius: 90px;

`;

const IMG = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  
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

  border-radius: 12px;
  gap: 9px;
`;
const TeamName = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-weight: medium;
  color: #FFFFFF;
  margin-bottom: 20px;
`;
const TeamInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #FFFFFF;
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
  color: #FFFFFF;
`;
const Follower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #FFFFFF;
`;
const EndTeamCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #FFFFFF;
`;
const Number = styled.p`
  font-size: 15px;
  font-weight: bolder;
  color: #FFFFFF;
`;
const About = styled.p`
  font-size: 10px;
  font-weight: bolder;
  color: #FFFFFF;
`;