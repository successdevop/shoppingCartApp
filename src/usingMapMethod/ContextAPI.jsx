import { createContext, useContext, useEffect, useReducer } from "react";
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  LOADING,
  NOT_LOADING,
  DISPLAY_ITEMS,
} from "./actions";

import getTotals from "./utils";
import reducer from "./reducer";

// base url
const BASE_URL = "https://www.course-api.com/react-useReducer-cart-project";

// defining content
const ContextProvider = createContext();

export const AppContext = () => useContext(ContextProvider);

// initial state
const initialState = {
  loading: false,
  cart: new Map(),
};

// content Component
function ContextAPI({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const handleClearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const handleIncreaseItem = (id) => {
    dispatch({ type: INCREASE_ITEM, payload: id });
  };

  const handleDecreaseItem = (id) => {
    dispatch({ type: DECREASE_ITEM, payload: id });
  };

  // fetch data
  const fetchData = async () => {
    try {
      dispatch({ type: LOADING });
      const data = await fetch(BASE_URL);
      const res = await data.json();
      dispatch({ type: DISPLAY_ITEMS, payload: { res } });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: NOT_LOADING });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextProvider.Provider
      value={{
        ...state,
        handleClearCart,
        handleRemoveItem,
        handleIncreaseItem,
        handleDecreaseItem,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export default ContextAPI;
