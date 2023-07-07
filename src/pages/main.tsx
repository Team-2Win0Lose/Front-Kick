import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import RegisterTeam from '../components/RegisterTeam/RegisterTeam';
import BannerCarousel from '../components/Banner/BannerCarousel';
import TeamCard from '../components/TeamRating/TeamCard';
import Navbar from '../components/Navbar/Navbar';

type Props = {};

const Main = (props: Props) => {
  const [isLogin, setisLogin] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <RegisterTeam />
      <Banner><BannerCarousel></BannerCarousel></Banner>
      <TeamCard></TeamCard>
    </div>
  );
};
export default Main;

const Banner = styled.div`
  background-color:#F2F5F7
`
