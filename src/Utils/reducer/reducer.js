const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add-to-cart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "remove-from-cart":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "change-cart-qty":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "clear_cart":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default productReducer;
