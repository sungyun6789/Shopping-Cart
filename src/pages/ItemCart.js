import React from 'react';
import { useSelector } from 'react-redux';

const ItemCart = () => {
  const { number } = useSelector(({ cartProduct }) => ({
    number: cartProduct.number,
  }));

  return (
    <>
      <h1>아이템카트</h1>
      <div>{number}개 담겨있습니다.</div>
      <button>비우기</button>
    </>
  );
};

export default ItemCart;
