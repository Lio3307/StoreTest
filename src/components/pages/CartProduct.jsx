import useCart from "../../state/useCart";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CartProduct = () => {
  const { productInCart, getCartStorage, totalCartPrice, increaseQty, decreaseQty } =
    useCart();
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
          {productInCart.map((products) => (
            <section
              key={products.id}
              className="text-gray-600 body-font overflow-hidden"
            >
              <div className=" my-[2rem] border-2 rounded-[0.6rem] mx-auto max-w-screen-sm md:max-w-screen-md">
                <Link
                  to={`/detail-product/${products.id}`}
                  className="flex flex-nowrap items-center gap-4"
                >
                  <div className="flex-shrink-0">
                    <img
                      alt={products.title}
                      src={products.image}
                      className="object-contain my-[0.6rem] rounded w-32 h-16 sm:w-40 sm:h-26"
                    />
                  </div>

                  <div className="flex-grow">
                    <h1 className="text-gray-900 text-[0.76rem] lg:text-[1.4rem] font-medium mb-2">
                      {products.title}
                    </h1>

                    <p>{products.qty}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        increaseQty(products);
                      }}
                    >
                      +
                    </button>
                    <button
                    onClick={(e)=> {
                      e.stopPropagation()
                      e.preventDefault()
                      decreaseQty(products)
                    }}>-</button>

                    <div className="text-[0.76rem] sm:text-2xl lg:text-[1.2rem] font-semibold text-gray-900 mt-4">
                      ${products.price}
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          ))}
          <p>{totalPrice}</p>
        </>
      )}
    </>
  );
};

export default CartProduct;
