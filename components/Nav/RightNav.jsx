import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #347f;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href="https://umetra.netlify.app/about">O nás</Link>
      </li>
      <li>
        <Link href="https://umetra.netlify.app/line-a">Linka A</Link>
      </li>
      <li>
        <Link href="https://umetra.netlify.app/line-b">Linka B</Link>
      </li>
      <li>
        <Link href="https://umetra.netlify.app/line-c">Linka C</Link>
      </li>
      <li>
        <Link href="https://umetra.netlify.app/contact">Kontakt</Link>
      </li>
    </Ul>
  );
};

export default RightNav;
