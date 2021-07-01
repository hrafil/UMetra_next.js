import React, { useState } from 'react';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="nav_bar">
      <button name="menu" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ width: '50px', height: '50px' }} />
        ) : (
          <BiMenu style={{ color: '#707070', width: '50px', height: '50px' }} />
        )}
      </button>
      <ul
        onClick={() => closeMenu()}
        className={`menu_nav ${navbarOpen ? ' show_menu' : ''}`}
      >
        <li className="nav_logo">
          <Link href="/">UMetra</Link>
        </li>
        <li className="nav_first">
          <Link href="/stations">Stanice</Link>
        </li>
        <li>
          <Link href="/search">Vyhledat</Link>
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
        <ul className="menu_bottom">
          <li>
            <Link href="/contact">Kontakt</Link>
          </li>
          <li>
            <Link href="/about">O projektu</Link>
          </li>
          <li>
            <Link href="/sources">Zdroje</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
