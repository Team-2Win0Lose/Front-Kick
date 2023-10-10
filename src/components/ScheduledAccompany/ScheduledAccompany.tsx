import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { HiPlusCircle } from 'react-icons/hi';
import SelectTeamCard from '../OnboardingTeamSelect/SelectTeamCard';

interface Props {
  team_id: number;
  follower: number;
  logo_img_url: string;
  original_team_name: string;
  recruit_end: number;
  recruit_ing: number;
  team_color_main: string;
  team_color_sub: string;
}

const ScheduledAccompany = (props: Props) => {
  const navigate = useNavigate();
  if (props.team_id !== 0) {
    return (
      <SelectTeamCard
        teamName={props?.original_team_name}
        teamcolor={props.team_color_main}
        logo={props.logo_img_url}
        name={props.original_team_name}
        ing={props.recruit_ing}
        follower={props.follower}
        end={props.recruit_end}
      />
    );
  } else {
    return (
      <Form onClick={() => navigate('/signup/onboarding')}>
        <HiPlusCircle size='60' onClick={() => {}} />
      </Form>
    );
  }
};

const Form = styled.div`
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

export default ScheduledAccompany;
