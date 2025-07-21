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
      set({ productList: response.data });
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
    return getCartData;
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
          ? {
              ...item,
              qty: Number(item.qty < item.stock ? item.qty + 1 : item.qty),
            }
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
          ? { ...item, qty: Number(item.qty > 1 ? item.qty - 1 : item.qty) }
          : item
      );
      return { productInCart: decrease };
    });
    get().setCartStorage();
  },
  checkOut: async (product) => {
    try {
      const confirmCheckOut = confirm("Are You Sure Want To Check Out?");
      if (!confirmCheckOut) return;
      await axios.patch(`${API_KEY}/${product.id}`, { stock: product.stock - product.qty})
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


        localStorage.removeItem("cartStorage");
        localStorage.setItem(
          "productStorage",
          JSON.stringify(setUpdatedProductList)
        );
        return {
          productList: setUpdatedProductList,
          productInCart: [],
        };
      });
      alert("Check Out Success!!");
    } catch (err) {
      console.error(err);
    }
  },
  clearCart: (e) => {
    e.preventDefault()
    e.stopPropagation()
    const confirmRemove = confirm('Are You Sure Want To CLear All Cart?')
    if(!confirmRemove) return;
    localStorage.removeItem('cartStorage')
    set({productInCart: []})
  }
}));

export default useProduct;
