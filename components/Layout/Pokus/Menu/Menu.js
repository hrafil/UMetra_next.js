import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import Link from 'next/link';

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
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
      <li>
        <Link href="/search">Vyhledat</Link>
      </li>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
