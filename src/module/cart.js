// Redux

import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'cart/INCREASE';
const DECREASE = 'cart/DECREASE';
const ADD_ITEM = 'cart/ADDITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const CLEAR = 'cart/CLEAR';
const TOGGLE = 'cart/TOGGLE';
const TOTAL = 'cart/TOTAL';

// createActions으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름으로 사용

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const addItem = createAction(ADD_ITEM, (id) => id);
export const removeItem = createAction(REMOVE_ITEM, (id) => id);
export const clear = createAction(CLEAR);
export const toggle = createAction(TOGGLE);
export const total = createAction(TOTAL);

const initialState = {
  counter: 0,
  cartList: [],
  cartOpen: true,
  sum: [],
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
      if (state.counter <= 0) {
        return state;
      } else {
        return {
          ...state,
          counter: state.counter - 1,
        };
      }
    },

    [ADD_ITEM]: (state, { payload }) => {
      const cart = state.cartList.find((item) => item.id === payload.id);
      if (!cart) {
        return {
          ...state,
          cartList: [...state.cartList, { ...payload, counter: 1 }],
        };
      } else {
        return {
          ...state,
          cartList: state.cartList.map((item) => {
            if (item.id === payload.id) {
              if (item.counter < 3) {
                item.counter++;
              }
            }
            return item;
          }),
        };
      }
    },

    [REMOVE_ITEM]: (state, { payload }) => {
      return {
        ...state,
        cartList: state.cartList.filter((item) => {
          if (item.id === payload.id) {
            item.counter--;
            if (item.counter !== 0) {
              return item;
            }
          } else {
            return item;
          }
        }),
      };
    },

    [CLEAR]: (state) => {
      return {
        ...state,
        counter: 0,
        cartList: [],
      };
    },

    [TOGGLE]: (state) => {
      return { cartOpen: !state.cartOpen };
    },

    [TOTAL]: (state) => {
      return {
        ...state,
        sum: state.cartList.price,
      };
    },
  },
  initialState,
);

export default cartProduct;
