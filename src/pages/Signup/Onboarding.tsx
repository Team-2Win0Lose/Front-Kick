import React from 'react';
import styled from 'styled-components';
import TeamSlide from '../../components/SelectTeam/TeamSlide';
type Props = {};

const Onboarding = (props: Props) => {
  return (
    <Form>
      <H1>환영해요!</H1>
      <H2>응원하는 K리그 팀이 있나요?</H2>
      <SlideWrap>
        <TeamSlide />
      </SlideWrap>
    </Form>
  );
};
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1``;
const H2 = styled.h2``;
const SlideWrap = styled.div`
  width: 100%;
`;
export default Onboarding;
