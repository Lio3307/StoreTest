import { create } from "zustand";
import axios from "axios";

const API_KEY = import.meta.env.VITE_FAKESTORE_API;

const useProduct = create((set, get) => ({
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
    const dataProduct = get().productList;
    localStorage.setItem('productStorage', JSON.stringify(dataProduct));
  },
  getLocalStorage: () => {
    const localData = JSON.parse(localStorage.getItem('productStorage'));
    if(localData) set({productList: localData});
    return localData || [];

  },
}));

export default useProduct;
