import { useState } from "react";
import useProduct from "../../state/useProduct";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productCateg, setProductCateg] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);
  const productImage = "https://picsum.photos/387/192";

  const { addProduct } = useProduct();

  const handleAddProduct = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (
      !productName.trim() ||
      !productCateg.trim() ||
      !productDesc.trim() ||
      productPrice <= 0 ||
      !productPrice.trim() ||
      productStock <= 0 ||
      !productStock.trim()
    ) {
      alert("Input Field Must Correct Or Cannot Be Empty!!");
      return;
    }

    addProduct({
      title: productName,
      price: parseFloat(productPrice),
      description: productDesc,
      category: productCateg,
      image: productImage,
      stock: parseInt(productStock),
    });
  };
  return (
    <>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Add New Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Product Name
            </label>
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Product Category
            </label>
            <input
              value={productCateg}
              onChange={(e) => setProductCateg(e.target.value)}
              type="text"
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-600 font-medium mb-2">
              Product Description
            </label>
            <textarea
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
              required
              className=" w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Price
            </label>
            <input
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              type="number"
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Stock
            </label>
            <input
              value={productStock}
              onChange={(e) => setProductStock(e.target.value)}
              type="number"
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <p className="text-sm text-gray-500 italic mt-4">
          -- Image will be automatically filled because this project is using
          json-server --
        </p>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            Add Product
          </button>

          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg shadow-md transition">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
