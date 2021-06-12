import React from 'react';
import styled from 'styled-components';
import Burger2 from './Burger2';

const Nav2 = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

const Navbar2 = () => {
  return (
    <Nav>
      <div className="logo"></div>
      <Burger2 />
    </Nav>
  );
};

export default Navbar;
