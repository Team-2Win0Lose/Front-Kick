import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import RegisterTeam from '../components/RegisterTeam/RegisterTeam';
import BannerCarousel from '../components/Banner/BannerCarousel';
import TeamCard from '../components/TeamCardCarousel/TeamCard';

type Props = {};

const Main = (props: Props) => {
  const [isLogin, setisLogin] = useState(false);
  return (
    <div>
      <RegisterTeam />
      <TeamCard></TeamCard>
      <BannerCarousel></BannerCarousel>
    </div>
  );
};
export default Main;
