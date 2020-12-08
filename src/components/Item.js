// 상품 페이지, productItems에서 다 가져와서 그대로 내보냄

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, decrease, increase, price } from '../module/cart';
import '../styles/ListStyle.scss';

const Item = (product) => {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

  const onIncrease = (product) => dispatch(increase(product));
  const onDecrease = (product) => dispatch(decrease(product));

  const plusItem = (product) => dispatch(addItem(product));
  const minusItem = (product) => dispatch(removeItem(product));

  const priceAdd = (product) => dispatch(price(product));

  return (
    <>
      <div className="item-container">
        <div className="item-title">{product.title}</div>
        <img alt={product.title} src={product.coverImage} />
        <div className="item-detail">
          <div className="item-price">가격: {product.price}원</div>

          {toggle === true ? (
            <button
              className="add-list-button"
              onClick={() => {
                onIncrease();
                plusItem(product);
                setToggle(!toggle);
                priceAdd(product);
              }}
            >
              담기
            </button>
          ) : (
            <button
              className="remove-list-button"
              onClick={() => {
                onDecrease();
                minusItem(product);
                setToggle(!toggle);
              }}
            >
              빼기
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Item;
