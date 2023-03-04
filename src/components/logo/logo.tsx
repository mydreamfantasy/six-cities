import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <Link to="/">
    <a className="header__logo-link" href="main.html">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </a>
  </Link>
);

export default Logo;
