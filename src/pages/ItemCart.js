import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '../module/cart';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import '../styles/CartStyle.scss';
import { coupons } from '../data/coupons';

const ItemCart = () => {
  const dispatch = useDispatch();
  const initializeCouponState = coupons.map((item) => ({
    ...item,
    checked: false,
  }));
  const [couponChecks, setCouponChecks] = useState([...initializeCouponState]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartList } = useSelector(({ cartProduct }) => ({
    cartList: cartProduct.cartList,
  }));
  const initializePrice = cartList.reduce((acc, cur) => (acc += cur.price), 0);
  useEffect(() => {
    setTotalPrice(initializePrice);
  }, []);
  const displayPrice = new Intl.NumberFormat().format(totalPrice);
  const clickBuyButton = () => {
    dispatch(clear());
    alert(`${totalPrice} 원 결제가 완료되었습니다.'`);
  };
  const handleCheckbox = (index) => {
    let handleCheckedArray = [...couponChecks];
    handleCheckedArray[index].checked = !handleCheckedArray[index].checked;
    setTotalPrice(initializePrice);
    setCouponChecks(handleCheckedArray);
    const checkRateCoupon = couponChecks.find(
      (item) => item.type === 'rate' && item.checked,
    );
    const checkAmountCoupon = couponChecks.find(
      (item) => item.type === 'amount' && item.checked,
    );
    let price = 0;
    if (checkRateCoupon && checkAmountCoupon) {
      price =
        totalPrice -
        totalPrice * (checkRateCoupon.discountRate / 100) -
        checkAmountCoupon.discountAmount;
    } else {
      if (checkRateCoupon) {
        price = totalPrice - totalPrice * (checkRateCoupon.discountRate / 100);
      } else if (checkAmountCoupon) {
        price =
          parseInt(totalPrice) - parseInt(checkAmountCoupon.discountAmount);
      }
    }
    if (price !== 0) {
      setTotalPrice(price);
    }
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
          <div>
            <div className="price-sum">
              {couponChecks.map((item, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    value={item.title}
                    checked={item.checked}
                    onChange={() => handleCheckbox(index)}
                  />
                  <p>{item.title}</p>
                </div>
              ))}
              <p>총 합계 {displayPrice}원</p>
            </div>
          </div>
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
