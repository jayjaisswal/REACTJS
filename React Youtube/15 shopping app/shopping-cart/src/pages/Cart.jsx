import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"
function Cart() {
  // const { cart } = useSelector((state) => state);
  const cart = useSelector((state) => state.cart);

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price, 0)
      
    );
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
          </div>

          <div>
            <div>Your Cart</div>
            <div>Summery</div>
            <p>
              <span>Total Items: {cart.length}</span>
            </p>
          </div>

          <div>
            <p>Total Amount: {totalAmount}</p>
          </div>
          <button>CheckOut Now</button>
        </div>
      ) : (
        <div>
          <div>Cart is empty</div>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Cart;
