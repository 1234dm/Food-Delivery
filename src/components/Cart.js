import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {

   const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
   const handleClearCart = () => {
    dispatch(clearCart());
   };

   return(
    <div className="text-center p-4 m-4">
    <h1 className=" font-bold text-2xl">Cart</h1>
    <div className="w-6/12 m-auto">
      <button className="p-2 m-2 bg-black text-white" onClick={handleClearCart}>ClearCart</button>
      <ItemList items={cartItems} />
    </div>
    </div>
     
  );

    
};

export default Cart;