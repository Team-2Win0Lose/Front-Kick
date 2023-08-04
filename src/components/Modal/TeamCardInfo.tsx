
import React from 'react';
import styled from 'styled-components';
type Props = {};

const TeamCard = (props: Props) => {
  return (
    <Wrap>
      <Container>
        상세정보
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80%;
  height: 300px;
  background-color: #fff;
  border: none;
  z-index: 10000;
  padding: 50px 24px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 12px;
`;
const Container = styled.div`
  height: auto;
`;
export default TeamCard;
