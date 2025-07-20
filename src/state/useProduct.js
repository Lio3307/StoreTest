import { create } from "zustand";
import axios from "axios";

const API_KEY = import.meta.env.VITE_FAKESTORE_API;

const useProduct = create((set, get) => ({
  productList: [],
  productInCart: [],
  //producList function
  fetchProduct: async () => {
    try {
      const response = await axios.get(API_KEY);
      const addStock = response.data.map((product) => ({
        ...product,
        stock: 100,
      }));
      set({ productList: addStock });
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

  //inCart function
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
            itemCart.id === product.id
              ? { ...itemCart, qty: itemCart.qty + 1 }
              : itemCart
          );

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
  totalCartPrice: () => {
    const cartData = get().productInCart;
    const totalPrice = cartData.reduce(
      (acc, val) => acc + val.price * val.qty,
      0
    );
    return totalPrice.toFixed(2);
  },
  increaseQty: (product) => {
    set((state) => {
      const increase = state.productInCart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty < item.stock ? item.qty + 1 : item.qty }
          : item
      );
      return { productInCart: increase };
    });
    get().setCartStorage();
  },
  decreaseQty: (product) => {
    set((state) => {
      const decrease = state.productInCart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty }
          : item
      );
      return { productInCart: decrease };
    });
    get().setCartStorage();
  },
  checkOut: (product) => {
    try {
      const confirmCheckOut = confirm('Are You Sure Want To Check Out?')
      if(!confirmCheckOut) return;
      set((state) => {
        const setUpdatedProductList = state.productList.map((productItems) => {
          if (product.id === productItems.id) {
            return {
              ...productItems,
              stock: productItems.stock - product.qty,
            };
          }
          return productItems;
        });
        localStorage.removeItem('cartStorage');
        localStorage.setItem('productStorage', JSON.stringify(setUpdatedProductList));
        return {
          productList: setUpdatedProductList,
          productInCart: [],
        };
      });
    } catch (err) {
      console.error(err)
    } finally {
      alert("Check Out Success!!")
    }
  },
}));

export default useProduct;
