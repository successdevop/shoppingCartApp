import CartItem from "./CartItem";

import { AppContext } from "./ContextAPI";

const CartContainer = () => {
  const { cart, loading, totalCost, handleClearCart } = AppContext();

  const cartArray = Array.from(cart.entries());

  if (loading === true) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h4 className="loading"></h4>
        </header>
      </section>
    );
  }

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={handleClearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
