import { useParams } from "react-router-dom";
import useProduct from "../../state/useProduct";
import { useState, useEffect } from "react";

const DetailsProduct = () => {
  const { id } = useParams();
  const { productList, fetchProduct } = useProduct();

  const [detailProduct, setDetailProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setDetailProduct(
        productList.find((product) => product.id === parseInt(id))
      );
      fetchProduct();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="">Loading</div>
      ) : (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="px-5 mt-20 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/3 w-full lg:h-100 h-64 object-contain object-center lg:mt-9 rounded"
                src={detailProduct.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:ml-[4rem] mt-[2rem] ">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {detailProduct.title}
                </h1>
                <div className="flex mb-4"></div>
                <p className="leading-relaxed">{detailProduct.description}</p>
                <div className="grid my-[2rem] grid-cols-3">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${detailProduct.price}
                  </span>
                  <button className="grid ml-1 text-white cursor-pointer bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Buy
                  </button>
                  <button className="grid ml-1 text-center text-white cursor-pointer bg-green-500 border-0 py-1 px-6 focus:outline-none hover:bg-green-600 rounded">
                    + Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DetailsProduct;
