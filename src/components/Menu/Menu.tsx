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
        <div role="button" onClick={toggleSide}>
          <GiHamburgerMenu
          size="30"
          color="#ffffff" />
        </div>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    );
}


export default Menu;
