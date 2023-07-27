import React from 'react';

import Search from './Header/Search';
import Filter from './Header/Filter';
import styled from 'styled-components';
type Props = {};

const AccompanyHeader = (props: Props) => {
  return (
    <Header>
      <Search />
      <Filter />
    </Header>
  );
};
const Header = styled.div`
  margin: 0 auto;
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-content: center;
  gap: 10px;
`;
export default AccompanyHeader;
