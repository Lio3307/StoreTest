import { create } from "zustand";
import axios from "axios";

const API_KEY = import.meta.env.VITE_FAKESTORE_API;

const useProduct = create((set, get) => ({
  productList: [],
  fetchProduct: async () => {
    try {
      const localStorage = get().getLocalStorage();
      if(localStorage){
        set({productList: localStorage})
        return;
      }
      const response = await axios.get(API_KEY);
      const addStock = response.data.map(product => ({
        ...product,
        stock: 100,
      }))
      set({ productList: addStock,});
      get().setLocalStorage();
    } catch (err) {
      console.error(err);
    }
  },
  setLocalStorage: () => {  
    const dataProduct = get().productList;
    localStorage.setItem("productStorage", JSON.stringify(dataProduct));
  },
  getLocalStorage: () => {
    const localData = JSON.parse(localStorage.getItem("productStorage"));
    return localData;
  },
}));

export default useProduct;
