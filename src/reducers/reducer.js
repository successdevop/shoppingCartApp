import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  LOADING,
  NOT_LOADING,
  DISPLAY_ITEMS,
} from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    case REMOVE_ITEM:
      let newCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };

    case INCREASE_ITEM:
      let itemIncreased = state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              amount: item.amount + 1,
            }
          : item
      );
      return { ...state, cart: itemIncreased };

    case DECREASE_ITEM:
      let itemDecreased = state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              amount: item.amount > 1 ? item.amount - 1 : item.amount,
            }
          : item
      );
      return { ...state, cart: itemDecreased };

    case LOADING:
      return { ...state, loading: true };

    case NOT_LOADING:
      return { ...state, loading: false };

    case DISPLAY_ITEMS:
      return { ...state, cart: action.payload };

    default:
      throw new Error(`This "${action.type}" --action does not exist`);
  }
}

export default reducer;
