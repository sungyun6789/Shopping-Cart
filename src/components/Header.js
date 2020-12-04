// 상단

import React from 'react';
import '../styles/HeaderStyle.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">Store</Link>
      <Link to="/list">About</Link>
      <Link to="/cart">Cart</Link>
    </header>
  );
};

export default Header;
