import React from 'react';
import RightNav from './RightNav';
import Burger from './Burger';

const NavLink = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RightNav open={open} on Click={() => setOpen(!false)} />
    </>
  );
};

export default NavLink;

// () => {
//   return {
//   to={link.path}
//   activeClassName="active-link"
//   onClick={() => closeMenu()}
//   exact
//   }
// },

// const closeMenu = () => {
//   setOpen(false);
//  };
