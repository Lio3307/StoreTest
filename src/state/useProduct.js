import { create } from "zustand";
import axios from "axios";

const API_KEY = import.meta.env.VITE_FAKESTORE_API;

const useProduct = create((set) => ({
  productList: [],
  fetchProduct: async () => {
    try {
      const response = await axios.get(API_KEY);
      set({ productList: response.data });
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useProduct;
