import useProduct from "../../state/useProduct";
import { useEffect } from "react";

const ProductCard = () => {
  const { productList, fetchProduct } = useProduct();

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <section  className="text-gray-600 body-font">
        <div className=" w-full px-5 my-24 max-w-screen-xl mx-auto ">  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productList.map((product) => (
              <div key={product.id} className="p-1 rounded-2xl border-2 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover rounded-2xl object-center w-full h-full block"
                    src={product.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
