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
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
`;
export default AccompanyHeader;
