import { create } from "zustand";

const useCart = create((set, get) => ({
  productInCart: [],

  setCartStorage: () => {
    const dataCart = get().productInCart;
    localStorage.setItem("cartStorage", JSON.stringify(dataCart));
  },
  getCartStorage: () => {
    const getCartData = JSON.parse(localStorage.getItem("cartStorage"));
    if (getCartData) set({ productInCart: getCartData });
  },
  addToCart: async (product) => {
    try {
      set((state) => {
        const existItems = state.productInCart.find(
          (item) => item.id === product.id
        );
        if (existItems) {
          const addQty = state.productInCart.map((itemCart) => 
          itemCart.id === product.id ? {...itemCart, qty: itemCart.qty +1,} : itemCart);

          return { productInCart: addQty };
        } else {
          return {
            productInCart: [...state.productInCart, { ...product, qty: 1 }],
          };
        }
      });
    } catch (err) {
      console.error(err);
    } finally {
      alert("Product Has Been Added To Cart!!");
    }
  },
  totalCartPrice: () => {},
}));
export default useCart;
