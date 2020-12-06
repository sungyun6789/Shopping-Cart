// 상단
import React from 'react';
import '../styles/HeaderStyle.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { counter } = useSelector(({ cartProduct }) => ({
    counter: cartProduct.counter,
  }));

  return (
    <div className="header-contaienr">
      <header className="header">
        <Link to="/product">Store</Link>
        <Link to="/cart">Cart ({counter})</Link>
      </header>
    </div>
  );
};

export default Header;
