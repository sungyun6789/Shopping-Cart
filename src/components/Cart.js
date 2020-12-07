import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease, addItem } from '../module/cart';

const Item = (product) => {
  const dispatch = useDispatch();

  const onIncrease = (product) => dispatch(increase(product));
  const onDecrease = (product) => dispatch(decrease(product));

  const onAdd = (product) => dispatch(addItem(product));
  const onRemove = (product) => dispatch(removeItem(product));

  return (
    <>
      <div className="item-container">
        <div className="item-title">{product.title}</div>
        <img alt={product.title} src={product.coverImage} />
        <div className="item-detail">
          <div className="item-price">가격: {product.price}원</div>
          {/* <span className="item-count">수량: </span> */}
          <div className="sort-block">
            <button
              className="add-cart-button"
              onClick={() => {
                onIncrease(product);
                onAdd(product);
              }}
            >
              +
            </button>
            <button
              className="remove-cart-button"
              onClick={() => {
                onDecrease(product);
                onRemove(product);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
