// 상단
import React from 'react';
import '../styles/HeaderStyle.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const number = 0;
  return (
    <header className="header">
      <Link to="/list">Store</Link>
      <Link to="/">About</Link>
      <Link to="/cart">Cart {number}개</Link>
    </header>
  );
};

export default Header;
