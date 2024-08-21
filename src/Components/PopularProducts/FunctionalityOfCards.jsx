import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

const FunctionalityOfCards = ({ showCart, value }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.productReducer.cart);

  return (
    <div>
      {cartItems.some((cartValue) => cartValue.id === value.id) ? (
        <motion.p
          initial={{
            x: 20,
            opacity: 1,
          }}
          animate={{
            x: showCart ? 0 : 20,
            opacity: showCart === value.id ? 1 : 0,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
              stiffness: 20,
            },
          }}
          className={`font-bold text-lg flex items-center  text-pink-800 uppercase  cursor-pointer ${
            showCart === value.id ? "block" : "hidden"
          }`}
          onClick={() => {
            dispatch({
              type: "remove-from-cart",
              payload: value,
            });
          }}
        >
          Remove From Cart
        </motion.p>
      ) : (
        <motion.p
          initial={{
            x: 20,
            opacity: 1,
          }}
          animate={{
            x: showCart ? 0 : 20,
            opacity: showCart === value.id ? 1 : 0,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
              stiffness: 20,
            },
          }}
          className={`font-bold text-lg  text-pink-800 uppercase cursor-pointer ${
            showCart === value.id ? "block" : "hidden"
          }`}
          onClick={() => {
            dispatch({
              type: "add-to-cart",
              payload: value,
            });
          }}
        >
          Add to Cart
        </motion.p>
      )}
    </div>
  );
};

export default FunctionalityOfCards;
