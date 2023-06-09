import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';



function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSide = () => {
      setIsOpen(true);
    };
   
    return (
      <div>
        <div role="button" onClick={toggleSide}>
          <GiHamburgerMenu />
        </div>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    );
}


export default Header;
