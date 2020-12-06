import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease } from '../module/cart';
import '../styles/ListStyle.scss';

const Item = (product) => {
  const dispatch = useDispatch();

  const onDecrease = () => dispatch(decrease());
  return (
    <>
      <div className="item-container">
        <div className="item-title">{product.title}</div>
        <img alt={product.title} src={product.coverImage} />
        <div className="item-detail">
          <div className="item-price">가격: {product.price}원</div>
          <button className="buy-button" onClick={onDecrease}>
            삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
