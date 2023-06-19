import React from 'react';
import styled from 'styled-components';
type Props = {};

const Base = (props: Props) => {
  return (
    <Wrap>
      <P>아직 선택한 구단 카드가 없어요</P>
      <P>위 탭에서 선택해주세요</P>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 80%;
  margin: 20px auto;
  background: #ffffff;
  border: 0.522796px solid black;
  box-shadow: 0px 2.09119px 2.09119px rgba(0, 0, 0, 0.25);
  border-radius: 15.6839px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  font-weight: 500;
  font-size: 18px;

  color: #868686;
`;
export default Base;
