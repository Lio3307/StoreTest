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
  setLocalStorage: () => {
    localStorage.setItem('productStorage', JSON.stringify(this.productList))
  },
  getLocalStorage: () => {
    
  }
}));

export default useProduct;
