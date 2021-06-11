import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <div />
        <div />
        <div />
      </div>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
