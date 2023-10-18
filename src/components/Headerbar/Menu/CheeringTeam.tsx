import { teamnametoFullname } from '@/util/teamnameConvertImg';
import React from 'react';
import styled from 'styled-components';

type Props = {
  team_id: number;
  follower: number;
  logo_img_url: string;
  original_team_name: string;
  recruit_end: number;
  recruit_ing: number;
  team_color_main: string;
  team_color_sub: string;
};

const CheeringTeam = (props: Props) => {
  return (
    <Form>
      <FlexContainer>
        <ColorContainer1 teamcolor={props.team_color_main}>
          <Img src={props.logo_img_url} alt={props.original_team_name} />
        </ColorContainer1>
        <ColorContainer2 teamcolor={props.team_color_sub}>
          <Title>{teamnametoFullname(props.original_team_name)}</Title>
          <VerticalContainer>
            <Team>{props.follower} 팔로워</Team>
            <Team>{props.recruit_end} 마감된 동행팀</Team>
            <Team>현재 {props.recruit_ing}팀 동행중</Team>
          </VerticalContainer>
        </ColorContainer2>
      </FlexContainer>
    </Form>
  );
};

const Title = styled.div`
  font-size: 20px;
  flex-direction: column;
`;
const Team = styled.p`
  font-size: 12px;
`;
const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 300px;
  height: 150px;
  background: #ffffff;
  border-radius: 15px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;
const FlexContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;
const ColorContainer1 = styled.div<{ teamcolor: string }>`
  position: absolute;
  width: 40%;
  height: 100%;

  top: 0;
  left: 0;
  background-color: ${(props) => props.teamcolor || '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ColorContainer2 = styled.div<{ teamcolor: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  padding: 20px;
  top: 0;
  width: 60%;
  height: 100%;
  left: 40%;
  background-color: ${(props) => props.teamcolor || '#FFFFFF'};
`;
const Current = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export default CheeringTeam;
