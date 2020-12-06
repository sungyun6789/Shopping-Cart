// 상품 페이지, productItems에서 다 가져와서 그대로 내보냄

import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, increase } from '../module/cart';
import '../styles/ListStyle.scss';

const Item = (product) => {
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const addCart = (product) => dispatch(addItem(product));

  return (
    <>
      <div className="item-container">
        <div className="item-title">{product.title}</div>
        <img alt={product.title} src={product.coverImage} />
        <div className="item-detail">
          <div className="item-price">가격: {product.price}원</div>
          <button
            onClick={() => {
              onIncrease();
              addCart(product);
            }}
          >
            장바구니에 담기
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
