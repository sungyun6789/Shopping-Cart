// 액션 타입 정의
// 액션 생성 함수 정의
// 초기 상태 정의
// 리듀서 함수
// import {createAction, handleActions} from 'redux-actions';

const INCREASE = 'cart/INCREASE';
const DECREASE = 'cart/DECREASE';
const ADD_ITEM = 'cart/ADDITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const CLEAR = 'cart/CLEAR';
const CHECK_OUT = 'cart/CHECK_OUT';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const addItem = () => ({ type: ADD_ITEM });
export const removeItem = () => ({ type: REMOVE_ITEM });
export const clear = () => ({ type: CLEAR });
export const checkout = () => ({ type: CHECK_OUT });

const initialState = {
  number: 0,
  item: 1,
  checkout: 'false',
};

const cartProduct = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    case ADD_ITEM:
      return state.concat(action.item);
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default cartProduct;
