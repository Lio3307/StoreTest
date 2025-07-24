import { useEffect, useState } from "react";
import ProductCard from "../layouts/ProductCard";
import useProduct from "../../state/useProduct";
import Fuse from "fuse.js";

const Home = () => {
  const { productList, fetchProduct} = useProduct();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        await fetchProduct();
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    handleFetch();
  }, []);

  const options = {
    keys: ["title"],
    threshold: 0.3,
  };
  const fuse = new Fuse(productList || [], options);
  const result = searchQuery
    ? fuse.search(searchQuery).map((res) => res.item)
    : productList;

  return (
    <>
      {loading ? (
        <section className="text-gray-600 body-font">
          <div className="w-full px-5 my-24 max-w-screen-xl mx-auto animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="p-1 rounded-2xl w-full">
                  <div className="block relative h-48 bg-gray-300 rounded-2xl mb-4"></div>
                  <div className="mt-4">
                    <div className="h-3 bg-gray-300 rounded w-1/3 mb-2"></div>
                    <div className="h-5 bg-gray-300 rounded w-2/3 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="container mx-auto px-4 my-6">
          <div className="mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search By Name Of Product..."
              className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {result.length > 0 ? (
            <ProductCard productData={result} />
          ) : (
            <p className="text-center text-gray-500">Produk tidak ditemukan</p>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
