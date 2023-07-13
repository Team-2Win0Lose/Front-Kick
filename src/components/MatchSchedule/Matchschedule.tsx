import React from 'react';
import styled from 'styled-components';
import MatchscheduleFilter from './MatchscheduleFilter';
import MatchscheduleItem from './MatchscheduleItem';
import MatchscheduleAdd from './MatchscheduleAdd';



type Props = {}

const MatchSchedule = (props: Props) => {
  return (
    <div>
      <MatchscheduleFilter></MatchscheduleFilter>
      <MatchscheduleItem/>
      <CenteredContainer>
      <MatchscheduleAdd/>
      </CenteredContainer>
      
    </div>
  )
}

export default MatchSchedule

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;