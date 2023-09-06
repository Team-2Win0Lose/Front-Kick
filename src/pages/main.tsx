import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import RegisterTeam from '../components/RegisterTeam/RegisterTeam';
import BannerCarousel from '../components/Banner/BannerCarousel';
import TeamCard from '../components/TeamRating/TeamCard';
type Props = {};

const Main = (props: Props) => {
  const [isLogin, setisLogin] = useState(false);
  return (
    <div>
      <BannerCarouselContainer>
        <BannerCarousel />
      </BannerCarouselContainer>
      <TeamCardContainer>
        <TeamCard />
      </TeamCardContainer>
    </div>
  );
};
export default Main;


const BannerCarouselContainer = styled.div`
  height:auto;
  overflow: hidden;
`;

const TeamCardContainer = styled.div`
  height:500px;
  overflow-x: hidden;
`;