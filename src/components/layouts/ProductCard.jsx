import { Link } from "react-router-dom";

const ProductCard = ({productData}) => {


  return (

        <>
          <div className="w-full px-5 my-8 max-w-screen-xl mx-auto flex justify-end">
            <Link
              to="/cart-product"
              className="text-white rounded-[0.6rem] px-[2rem] py-2 bg-slate-700 hover:bg-slate-800 transition"
            >
              Cart
            </Link>
          </div>
          <div className="w-full px-5 my-8 max-w-screen-xl mx-auto flex justify-end">
            <Link
              to="/add-product"
              className="text-white rounded-[0.6rem] px-[2rem] py-2 bg-green-500 hover:bg-green-600 transition"
            >
              Add product
            </Link>
          </div>
          <section className="text-gray-600 body-font">
            <div className=" w-full px-5 my-24 max-w-screen-xl mx-auto ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {productData.map((product) => (
                  <Link
                    to={`/detail-product/${product.id}`}
                    key={product.id}
                    className="p-1 cursor-pointer rounded-2xl w-full"
                  >
                    <p className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt={product.name}
                        className="object-contain rounded-2xl object-center w-full h-full block"
                        src={product.image}
                      />
                    </p>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {product.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {product.title.slice(0, 20) + "..."}
                      </h2>
                      <p className="mt-1">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
  );
};

export default ProductCard;
