import styled from 'styled-components';
import { dummyTeams } from '../../../public/dummy/dummyTeams';
import Slider from 'react-slick';

type Props = {};

const TeamSlide = (props: Props) => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <TeamSlider {...settings}>
      {dummyTeams.map((team, index) => (
        <TEAMS key={index}>
          <TeamLogo>
            <TeamIMG src={team.teamImg} />
          </TeamLogo>
          <TeamName>{team.teamName}</TeamName>
        </TEAMS>
      ))}
    </TeamSlider>
  );
};
const TeamSlider = styled(Slider)`
  margin: 0 auto;
  width: 85%;
`;
const TEAMS = styled.div`
  gap: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
`;
const TeamLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TeamIMG = styled.img`
  width: 48px;
  height: 55px;
`;
const TeamName = styled.p`
  padding: 0 10px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
`;

export default TeamSlide;
