// Redux

import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'cart/INCREASE';
const DECREASE = 'cart/DECREASE';
const ADD_ITEM = 'cart/ADDITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const REMOVE_ALL_ITEM = 'cart/REMOVE_ITEM';
const CHECK_OUT = 'cart/CHECK_OUT';

// createActions으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름으로 사용

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const addItem = createAction(ADD_ITEM);
export const removeItem = createAction(REMOVE_ITEM, (id) => id);
export const removeAllItem = createAction(REMOVE_ALL_ITEM, (id) => id);
export const checkout = createAction(CHECK_OUT);

const initialState = {
  counter: 0,
  cartList: [],
};

// handleActions - 첫번째 인자에는 액션에 대한 업데이트 함수, 두번째는 초기값
// Add 버튼에 대해 이벤트가 일어나면 cartList에 저장

const cartProduct = handleActions(
  {
    [INCREASE]: (state) => {
      if (state.counter >= 3) {
        return state;
      } else {
        return {
          ...state,
          counter: state.counter + 1,
        };
      }
    },

    [DECREASE]: (state) => {
      if (state.counter > 0) {
        return state;
      } else {
        return { counter: state.counter - 1 };
      }
    },

    [ADD_ITEM]: (state, { payload }) => {
      if (state.cartList.length >= 3) {
        return state;
      } else {
        return {
          ...state,
          cartList: state.cartList.concat(payload),
        };
      }
    },

    [REMOVE_ITEM]: (state, { payload: id }) => ({
      ...state,
      cartList: state.cartList.filter((item) => item.id !== id),
    }),

    [REMOVE_ALL_ITEM]: (state) => ({
      ...state,
      cartList: [],
    }),
  },
  initialState,
);

export default cartProduct;
