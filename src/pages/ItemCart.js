// 장바구니 페이지

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllItem } from '../module/cart';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import '../styles/CartStyle.scss';

const ItemCart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector(({ cartProduct }) => ({
    cart: cartProduct.cartList,
  }));
  console.log(cart);

  const clickBuyButton = () => {
    dispatch(removeAllItem());
    alert('결제가 완료되었습니다.');
  };

  return (
    <div>
      {cart.length > 0 &&
        cart.map((item) => (
          <Cart
            className="cart-container"
            key={item.id}
            item={item}
            {...item}
          />
        ))}

      {cart.length > 0 && (
        <>
          <button className="buyButton" onClick={clickBuyButton}>
            구매
          </button>
          <div className="price-sum">총 합계</div>
        </>
      )}

      {cart.length === 0 && <span>장바구니가 비었습니다.</span>}
      {cart.length === 0 && (
        <Link to="/product">다시 쇼핑하러 가시겠습니까?</Link>
      )}
    </div>
  );
};

export default ItemCart;
