import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 0;

  li {
    text-align: center;
    font-size: 15px;
    padding-right: 5px;
  }

  @media (max-width: 768px) {
    font-weight: bold;
    z-index: 10;
    margin-top: 0;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3rem;
    font-size: 20px;

    li {
      color: #fff;
    }

    .home {
      padding-bottom: 60px;
    }

    .contact {
      padding-top: 60px;
      padding-bottom: 10px;
    }
  }
`;

const RightNav = (props) => {
  function closeRightNav(event) {
    props.onChange(false);
  }

  return (
    <Ul open={props.open} onClick={() => closeRightNav(false)}>
      <li className="home">
        <Link href="/">UMetra</Link>
      </li>
      <li className="stations">
        <Link href="/stations">Stanice</Link>
      </li>
      <li className="hledej">
        <Link href="/search">Vyhledat</Link>
      </li>
      <li>
        <Link href="/about">O projektu</Link>
      </li>
      <li>
        <Link href="/sources">Zdroje</Link>
      </li>
      <li className="contact">
        <Link href="/contact">Kontakt</Link>
      </li>
    </Ul>
  );
};

// const closeMenu = () => {
//   setOpen(false);
// };

export default RightNav;
