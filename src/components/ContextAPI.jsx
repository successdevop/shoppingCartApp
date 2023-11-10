import { createContext, useContext, useEffect, useReducer } from "react";
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  LOADING,
  NOT_LOADING,
  DISPLAY_ITEMS,
} from "../reducers/actions";
import reducer from "../reducers/reducer";

const BASE_URL = "https://www.course-api.com/react-useReducer-cart-project";

// defining content
const ContextProvider = createContext();

export const AppContext = () => useContext(ContextProvider);

// initial state
const initialState = {
  loading: false,
  cart: [],
};

// content Component
function ContextAPI({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalAmountInCart = state.cart.reduce(
    (acc, curr) => (acc += Number(curr.price) * curr.amount),
    0
  );

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: LOADING });
        const res = await fetch(BASE_URL);
        const data = await res.json();
        dispatch({ type: DISPLAY_ITEMS, payload: data });
      } catch (error) {
        console.log(error);
      } finally {
        dispatch({ type: NOT_LOADING });
      }
    };
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
        totalAmountInCart,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export default ContextAPI;
