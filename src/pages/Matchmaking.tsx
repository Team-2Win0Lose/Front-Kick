import React from 'react';
import styled from 'styled-components';
import DateCard from '../components/Waitingdate/DateCard';
import Matchschedule from '../components/MatchSchedule/Matchschedule'
import MatchscheduleAdd from '../components/MatchSchedule/MatchscheduleAdd'
type props = {};

const Matchmaking = (props: props) => {
  return (
  <DIV><DateCard></DateCard>
  <Matchschedule></Matchschedule>
  </DIV>
  );
};

export default Matchmaking;


const DIV = styled.div`
  
`;
