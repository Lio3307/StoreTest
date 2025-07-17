import { useParams } from "react-router-dom";
import useProduct from "../../state/useProduct";
import { useState, useEffect } from "react";

const DetailsProduct = () => {
  const { id } = useParams();
  const { productList } = useProduct();

  const [detailProduct, setDetailProduct] = useState({});

  useEffect(() => {
    setDetailProduct(
      productList.find((product) => product.id === parseInt(id))
    );
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="px-5 mt-20 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/3 w-full lg:h-auto h-64 object-contain object-center rounded"
              src={detailProduct.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:ml-[2rem] mt-[2rem] ">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {detailProduct.title}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">{detailProduct.description}</p>
              <div className="grid mt-[2rem] grid-cols-2">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${detailProduct.price}
                </span>
                <button className="grid ml-auto text-white cursor-pointer bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsProduct;
