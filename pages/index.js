import Link from 'next/link';
import React, { useState } from 'react';

const Home = () => {
  const [title1, setTitle1] = useState('UM');
  const [title2, setTitle2] = useState('etra');

  const handleTitle = () => {
    title1 === 'UM' ? setTitle1('') : setTitle1('UM');
    title2 === 'etra' ? setTitle2('U metra') : setTitle2('etra');
  };

  return (
    <div className="container_home">
      <h1 onClick={handleTitle}>
        <b>{title1}</b>
        {title2}
      </h1>
      <p>
        Prozkoumejte umělecká díla v&nbsp;pražských linkách metra a&nbsp;jejich
        blízkém okolí. Vyberte si trasu.
      </p>
      <ul className="btn_home">
        <li className="btn_green">
          <Link href="/line-a">A</Link>
        </li>
        <li className="btn_yellow">
          <Link href="/line-b">B</Link>
        </li>
        <li className="btn_red">
          <Link href="/line-c">C</Link>
        </li>
      </ul>
      <footer></footer>
    </div>
  );
};

export default Home;
