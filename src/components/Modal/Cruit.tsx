import React from 'react';
import styled from 'styled-components';
type Props = {};

const Cruit = (props: Props) => {
  return (
    <Container>
      <Btn>모집중</Btn>
      <Btn>모집마감</Btn>
      <Btn>모집마감임박</Btn>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80%;
  height: 547px;
  background-color: #fff;
  border: none;
  z-index: 10000;
  padding: 50px 24px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 12px;
  gap: 10px;
`;
const Btn = styled.div`
  width: 80px;
  height: 30px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: white;
`;
export default Cruit;
