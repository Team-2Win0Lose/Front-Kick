import React from 'react';
import styled from 'styled-components';
import TeamSlide from '../../components/SelectTeam/TeamSlide';
import SelectTeam from '../SelectTeam';
type Props = {};

const Onboarding = (props: Props) => {
  return (
    <Form>
      <TitleForm>
        <H1>환영해요!</H1>
        <H1>응원하는 K리그 팀이 있나요?</H1>
      </TitleForm>

      <SlideWrap>
        <SelectTeam />
      </SlideWrap>
    </Form>
  );
};
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
const TitleForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const H1 = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
const SlideWrap = styled.div`
  width: 100%;
`;
export default Onboarding;
