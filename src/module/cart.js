// 액션 타입 정의
// 액션 생성 함수 정의
// 초기 상태 정의
// 리듀서 함수
import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'cart/INCREASE';
const DECREASE = 'cart/DECREASE';
const ADD_ITEM = 'cart/ADDITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const CLEAR = 'cart/CLEAR';
const CHECK_OUT = 'cart/CHECK_OUT';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const addItem = createAction(ADD_ITEM);
export const removeItem = createAction(REMOVE_ITEM);
export const clear = createAction(CLEAR);
export const checkout = createAction(CHECK_OUT);

const initialState = {
  number: 0,
  sum: 0,
  checkout: 'false',
};

const cartProduct = handleActions(
  {
    [INCREASE]: (state) => ({ number: state.number + 1 }),
    [DECREASE]: (state) => ({ number: state.number - 1 }),
    [ADD_ITEM]: (state, { payload: id }) => ({
      ...state,
      cart: state.cart.concat(id),
    }),
    [REMOVE_ITEM]: (state, { payload: id }) => ({
      ...state,
      cart: state.cart.filter((item) => item.id !== id),
    }),
    [CLEAR]: (state) => ({
      ...state,
      cart: state.cart(0),
    }),
  },
  initialState,
);

export default cartProduct;

// const cartProduct = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         ...state,
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         ...state,
//         number: state.number - 1,
//       };
//     case ADD_ITEM:
//       return state.concat(action.item);
//     case REMOVE_ITEM:
//       return state.filter((item) => item.id !== action.id);
//     default:
//       return state;
//   }
// };

// export default cartProduct;
