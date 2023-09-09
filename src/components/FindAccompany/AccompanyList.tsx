import React from 'react';
import styled from 'styled-components';
import Accompany from './Accompany';

type Props = {};

const AccompanyList = (props: Props) => {
  return (
    <ListContainer>
      <Accompany postId={1} />
      <Accompany postId={2} />
      <Accompany postId={3} />
      <Accompany postId={4} />
    </ListContainer>
  );
};
const ListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-content: center;
`;
export default AccompanyList;
