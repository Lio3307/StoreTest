import { create } from "zustand";
import axios from "axios";

const API_KEY = import.meta.env.VITE_FAKESTORE_API

const useProduct = create((set) => ({
    productList: [],
    fetchProduct: async () => {
        const response = axios.get(API_KEY)
        set({productList: response.data})
    }
}));

export default useProduct;