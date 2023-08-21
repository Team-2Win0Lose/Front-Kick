import MatchInfo from '@/components/ManageAccompany/MatchInfo';
import Participate from '@/components/ManageAccompany/Participate';
import React from 'react';
import styled from 'styled-components';
type Props = {};

const ManageAccompany = (props: Props) => {
  return (
    <Wrap>
      <Participate />
      <MatchInfo />
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  gap: 10px;
`;
export default ManageAccompany;
