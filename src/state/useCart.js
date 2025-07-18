import { create } from "zustand";

const useCart = create((set, get) => ({
  productInCart: [],
  addToCart: (product) => {
    const dataCart = get().productInCart;
    set({ productInCart: [{ ...dataCart }, product] });
  },
}));
export default useCart;
