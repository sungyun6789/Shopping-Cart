// 상단
import React from 'react';
import '../styles/HeaderStyle.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { number } = useSelector(({ cartProduct }) => ({
    number: cartProduct.number,
  }));

  return (
    <header className="header">
      <Link to="/list">Store</Link>
      <Link to="/">About</Link>
      <Link to="/cart">Cart {number}개</Link>
    </header>
  );
};

export default Header;
