import { useEffect, useState } from "react";
import useProduct from "../../state/useProduct";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const { getLocalStorage, productList } = useProduct();

  const [newProductName, setNewProductName] = useState("");
  const [newProductDesc, setNewProductDesc] = useState("");
  const [newProductCateg, setNewProductCateg] = useState("");
  const [newProductPrice, setNewProductPrice] = useState(0);
  const [newProductStock, setNewProductStock] = useState(0);

  useEffect(() => {
    try {
      const getProduct = getLocalStorage() || productList;
      const setEditData = getProduct.find((product) => product.id === id);
      console.log(setEditData);
      setNewProductName(setEditData.title);
      setNewProductDesc(setEditData.description);
      setNewProductCateg(setEditData.category);
      setNewProductPrice(setEditData.price);
      setNewProductStock(setEditData.stock);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Edit Product
      </h2>

      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Product Name</label>
        <input
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          type="text"
          required
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Product Description</label>
        <textarea
          value={newProductDesc}
          onChange={(e) => setNewProductDesc(e.target.value)}
          required
          className="border rounded-lg px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Product Category</label>
        <input
          value={newProductCateg}
          onChange={(e) => setNewProductCateg(e.target.value)}
          type="text"
          required
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Product Price</label>
        <input
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
          type="number"
          required
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Product Stock</label>
        <input
          value={newProductStock}
          onChange={(e) => setNewProductStock(e.target.value)}
          type="number"
          required
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Save Product
      </button>
    </div>
  );
};

export default EditProduct;
