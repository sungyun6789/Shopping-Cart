import React from 'react';
import '../styles/ListStyle.scss';
import productItems from '../services/productItems';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../module/cart';

const ItemList = () => {
  const itemList = productItems;
  const btn = true;

  const dispatch = useDispatch();

  const { cartProduct } = useSelector((state) => state.cartProduct);

  const onIncrease = (counter) => dispatch(increase(counter));
  const onDecrease = (counter) => dispatch(decrease(counter));

  return (
    <>
      <div className="item">
        {itemList.map((product) => (
          <div className="item-container">
            <div className="item-title">{product.title}</div>
            <img alt={product.id} src={product.coverImage} />
            <div className="item-box">
              <div className="item-price">가격: {product.price}원</div>
              {btn === true ? (
                <button onClick={onIncrease}>장바구니에 담기</button>
              ) : (
                <button onClick={onDecrease}>장바구니에서 빼기</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
