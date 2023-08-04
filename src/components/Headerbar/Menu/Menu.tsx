import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div role='button' onClick={toggleSide}>
        <CustomIcon />
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

const CustomIcon = styled(GiHamburgerMenu)`
  color: black;
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export default Menu;
