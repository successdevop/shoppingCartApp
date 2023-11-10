import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { AppContext } from "./ContextAPI";

const CartItem = ({ id, img, title, price, amount }) => {
  const { handleRemoveItem, handleIncreaseItem, handleDecreaseItem } =
    AppContext();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">
          ${(Number(price) * amount).toFixed(2)}
        </span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => handleRemoveItem(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => handleIncreaseItem(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => handleDecreaseItem(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
