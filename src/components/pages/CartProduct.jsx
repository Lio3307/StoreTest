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
          <div className="px-1 mt-20 border-2 rounded-[0.6rem] mx-[5rem]">
            <div className="lg:w-4/5 mx-[4rem] flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/8 w-full lg:h-50 h-64 object-contain object-center lg:mt-9 rounded"
                src={products.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:ml-[4rem] mt-[2rem] ">
                <h1 className="text-gray-900 text-3xl title-font text-mb-1">
                  {products.title}
                </h1>
                <div className="flex mb-4"></div>
                <div className="grid my-[2rem] grid-cols-3">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${products.price}
                  </span>
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
