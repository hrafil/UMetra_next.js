import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: ##ffffff;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 100,
  width: 100vw;
  height: 100vh;


  li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href="/stations">UMstanice</Link>
      </li>
      <li>
        <Link href="/line-a">Linka A</Link>
      </li>
      <li>
        <Link href="/line-b">Linka B</Link>
      </li>
      <li>
        <Link href="/line-c">Linka C</Link>
      </li>
      <li>
        <Link href="/about">O projektu</Link>
      </li>
      <li>
        <Link href="/sources">Zdroje</Link>
      </li>
      <li>
        <Link href="/contact">Kontakt</Link>
      </li>
    </Ul>
  );
};

export default RightNav;
