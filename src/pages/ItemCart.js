import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '../module/cart';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import '../styles/CartStyle.scss';

const ItemCart = () => {
  const dispatch = useDispatch();

  const { cartList } = useSelector(({ cartProduct }) => ({
    cartList: cartProduct.cartList,
  }));

  const { price } = useSelector(({ cartProduct }) => ({
    price: cartProduct.cartList.sum,
  }));

  const clickBuyButton = () => {
    dispatch(clear());
    alert('결제가 완료되었습니다.');
  };

  return (
    <div>
      <div className="cart-body">
        {Object.keys(cartList).length >= 0 &&
          cartList.map((item) => (
            <Cart key={item.id} item={item} prodct={item.id} {...item} />
          ))}
      </div>
      {Object.keys(cartList).length > 0 && (
        <>
          <button className="buy-button" onClick={clickBuyButton}>
            구매
          </button>
          <div className="price-sum">총 합계 {price}원</div>
        </>
      )}

      {Object.keys(cartList).length === 0 && (
        <span className="empty_basket">장바구니가 비었습니다.</span>
      )}
      {Object.keys(cartList).length === 0 && (
        <Link to="/products" className="back-store">
          다시 쇼핑하러 가시겠습니까?
        </Link>
      )}
    </div>
  );
};

export default ItemCart;
