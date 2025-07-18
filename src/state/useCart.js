import { create } from "zustand";

const useCart = create((set, get) => ({
  productInCart: [],

  setCartStorage: () => {
    const dataCart = get().productInCart;
    localStorage.setItem('cartStorage', JSON.stringify(dataCart))
  },
  getCartStorage: () => {
    const getCartData = JSON.parse(localStorage.getItem('cartStorage'));
    if(getCartData) set({productInCart: getCartData});
  },
  addToCart: (product) => {
    try {
      set((state) => ({ productInCart: [...state.productInCart , product] }));
    } catch (err) {
      console.error(err);
    } finally {
      alert("Product Has Been Added To Cart!!");
    }
  },
}));
export default useCart;
