import useProduct from "../../state/useProduct";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CartProduct = () => {
  const {
    productInCart,
    getCartStorage,
    totalCartPrice,
    increaseQty,
    decreaseQty,
    checkOut,
    clearCart,
  } = useProduct();
  const [loading, setLoading] = useState(true);
  const totalPrice = totalCartPrice();

  useEffect(() => {
    try {
      getCartStorage();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="px-4 mt-20 border-2 rounded-[0.6rem] mx-auto max-w-screen-lg">
            <div className="flex flex-nowrap items-center gap-4 animate-pulse">
              <div className="flex-shrink-0">
                <div className="bg-gray-300 rounded w-32 h-32 sm:w-40 sm:h-48"></div>
              </div>
              <div className="flex-grow">
                <div className="bg-gray-300 h-6 w-3/4 mb-4 rounded"></div>
                <div className="bg-gray-300 h-5 w-1/4 rounded"></div>
              </div>
            </div>
          </div>
        </section>
      ) : productInCart.length === 0 ? (
        <h3 className="text-center mt-[1.6rem]">
          You Dont Have Item On Your Cart...
        </h3>
      ) : (
        <>
          <div className="max-w-screen-md mx-auto p-4 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition active:scale-95 shadow-sm"
            >
              Clear Cart
            </button>

            <p className="text-gray-500 text-sm">
              {productInCart.length} item{productInCart.length > 1 ? "s" : ""}{" "}
              in cart
            </p>
          </div>
          {productInCart.map((products) => (
            <section
              key={products.id}
              className="text-gray-600 body-font overflow-hidden"
            >
              <div className="my-8 border rounded-lg mx-auto max-w-screen-md p-4 shadow-md">
                <Link
                  to={`/detail-product/${products.id}`}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0">
                    <img
                      alt={products.title}
                      src={products.image}
                      className="object-contain rounded w-24 h-24 sm:w-32 sm:h-32"
                    />
                  </div>

                  <div className="flex-grow">
                    <h1 className="text-gray-900 text-base sm:text-xl lg:text-2xl font-semibold mb-2">
                      {products.title}
                    </h1>

                    <div className="flex items-center gap-2 mb-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          decreaseQty(products);
                        }}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded hover:bg-gray-300 transition"
                      >
                        -
                      </button>

                      <p className="text-lg font-medium">{products.qty}</p>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          increaseQty(products);
                        }}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded hover:bg-gray-300 transition"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                      ${products.price}
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          ))}
          <div className="max-w-screen-md mx-auto p-4 border-t mt-6">
            <div className="flex justify-between items-center text-xl font-bold mb-4">
              <p>Total:</p>
              <p>${totalPrice}</p>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                checkOut(productInCart);
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition active:scale-95"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CartProduct;
