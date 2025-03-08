import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

function CartItem({ item, index }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
      </div>
      <div>
        <p>{item.price}</p>
      </div>
      <div>
        <button onClick={removeFromCart}>
          <FcDeleteDatabase />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
