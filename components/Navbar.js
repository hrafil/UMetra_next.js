import React, { useState } from 'react';
import Link from 'next/link';

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
      <div className="logo">
        <Link href="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
      </div>
      <button
        name="menu"
        onClick={handleToggle}
        className={navbarOpen ? 'hamburger is-opened' : 'hamburger'}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul
        onClick={() => closeMenu()}
        className={`menu_nav ${navbarOpen ? ' show_menu' : ''}`}
      >
        <li className="nav_logo">
          <Link href="/">UMetra </Link>
        </li>
        <li className="nav_first">
          <Link href="/vyhledavani">Vyhledat</Link>
          <span className="search">&#8981;</span>
        </li>

        <li>
          <Link href="/stanice">Stanice</Link>
        </li>

        <li>
          <Link href="/linka-a">Linka A</Link>
        </li>
        <li>
          <Link href="/linka-b">Linka B</Link>
        </li>
        <li>
          <Link href="/linka-c">Linka C</Link>
        </li>
        <ul className="menu_bottom">
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link href="/o-projektu">O projektu</Link>
          </li>
          <li>
            <Link href="/zdroje">Zdroje</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
