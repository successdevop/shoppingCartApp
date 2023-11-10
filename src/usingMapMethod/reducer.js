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
      return { ...state, cart: new Map() };

    case REMOVE_ITEM:
      const newMapData = new Map(state.cart);
      let itemId = action.payload;
      newMapData.delete(itemId);
      return { ...state, cart: newMapData };

    case INCREASE_ITEM:
      const newMapData1 = new Map(state.cart);
      const item = newMapData1.get(action.payload);
      const newItem = { ...item, amount: item.amount + 1 };
      newMapData1.set(action.payload, newItem);
      return { ...state, cart: newMapData1 };

    case DECREASE_ITEM:
      const newMapData2 = new Map(state.cart);
      const itemId2 = action.payload;
      const item2 = newMapData2.get(itemId2);
      const newItem2 = {
        ...item2,
        amount: item2.amount > 1 ? item2.amount - 1 : item2.amount,
      };
      newMapData2.set(itemId2, newItem2);
      return { ...state, cart: newMapData2 };

    case LOADING:
      return { ...state, loading: true };

    case NOT_LOADING:
      return { ...state, loading: false };

    case DISPLAY_ITEMS:
      return {
        ...state,
        cart: new Map(action.payload.res.map((item) => [item.id, item])),
        loading: false,
      };

    default:
      throw new Error(`This "${action.type}" --action does not exist`);
  }
}

export default reducer;
