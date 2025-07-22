import { useParams } from "react-router-dom";
import useProduct from "../../state/useProduct";
import { useState, useEffect } from "react";

const DetailsProduct = () => {
  const { id } = useParams();
  const {
    productList,
    getLocalStorage,
    addToCart,
    setCartStorage,
    deleteProduct,
  } = useProduct();

  const [detailProduct, setDetailProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const currentProduct = getLocalStorage() || productList;
        const productMatchId = currentProduct.find(
          (product) => product.id === id
        );
        setDetailProduct(productMatchId);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    handleFetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="px-5 mt-20 mx-auto animate-pulse">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/3 w-full lg:h-100 h-64 bg-gray-300 rounded"></div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:ml-[4rem] mt-[2rem]">
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
              <div className="grid my-[2rem] grid-cols-3 gap-2">
                <div className="h-10 bg-gray-300 rounded"></div>
                <div className="h-10 bg-gray-300 rounded"></div>
                <div className="h-10 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="text-gray-600  body-font overflow-hidden">
          <div className="px-5 mt-20 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={detailProduct.name}
                className="lg:w-1/3 w-full lg:h-100 h-64 object-contain object-center lg:mt-9 rounded"
                src={detailProduct.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:ml-[4rem] mt-[2rem] ">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {detailProduct.title}
                </h1>
                <h3 className="text-gray-500 text-md tracking-widest title-font mt-[0.86rem]">
                  Stock : {detailProduct.stock}
                </h3>
                <div className="flex mb-4"></div>
                <p className="leading-relaxed">{detailProduct.description}</p>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 mt-8">
                  <button
                    disabled={detailProduct.stock === 0}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(detailProduct);
                      setCartStorage();
                    }}
                    className={`flex-1 text-center text-white ${
                      detailProduct.stock === 0
                        ? "bg-green-950 cursor-not-allowed"
                        : "cursor-pointer bg-green-500 hover:bg-green-600"
                    } border-0 py-2 px-6 rounded transition duration-300`}
                  >
                    {detailProduct.stock === 0 ? "Out Of Stock!" : "+ Cart"}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      deleteProduct(detailProduct.id);
                    }}
                    className="flex-1 text-white bg-red-600 hover:bg-red-700 font-medium rounded py-2 px-6 transition duration-300"
                  >
                    Delete Product
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
