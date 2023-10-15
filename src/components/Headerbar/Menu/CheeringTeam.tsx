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
        <ColorContainer2 teamcolor={props.team_color_sub}></ColorContainer2>
        <VerticalContainer></VerticalContainer>
      </FlexContainer>
    </Form>
  );
};
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
  /* margin-top: 10px; */
`;
const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  margin-right: 10px;
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
  top: 0;
  width: 60%;
  height: 100%;

  left: 40%;
  background-color: ${(props) => props.teamcolor || '#FFFFFF'};
`;
export default CheeringTeam;
