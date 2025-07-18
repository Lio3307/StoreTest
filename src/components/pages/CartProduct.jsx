import useCart from "../../state/useCart";
import { useEffect } from "react";

const CartProduct = () => {
  const { productInCart, getCartStorage } = useCart();

  useEffect(() => {
    getCartStorage();
  }, []);
  return (
    <>
      {productInCart.length === 0 ? (
        <h3 className="text-center mt-[1.6rem]">
          You Dont Have Item On Your Cart...
        </h3>
      ) : (
        productInCart.map((products) => (
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="px-4 mt-20 border-2 rounded-[0.6rem] mx-auto max-w-screen-lg">
              <div className="flex flex-nowrap items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    alt={products.title}
                    src={products.image}
                    className="object-contain my-[1rem] rounded w-32 h-32 sm:w-40 sm:h-48"
                  />
                </div>

                <div className="flex-grow">
                  <h1 className="text-gray-900 text-xl sm:text-3xl font-medium mb-2">
                    {products.title}
                  </h1>

                  <div className="text-lg sm:text-2xl font-semibold text-gray-900 mt-4">
                    ${products.price}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))
      )}
    </>
  );
};

export default CartProduct;
