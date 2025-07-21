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
      productPrice === 0 ||
      isNaN(productPrice) ||
      productStock === 0 ||
      isNaN(productStock)
    ) {
      alert("Input Field Must Correct Or Cannot Be Empty!!");
      return;
    }

    addProduct(
      productName,
      productDesc,
      productCateg,
      productPrice,
      productStock,
      productImage
    );
  };
  return (
    <>
      <div className="container">
        <label>Product Name</label>
        <input
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          type="text"
          required
        />

        <label>Product Descrption</label>
        <textarea
          value={productDesc}
          onChange={(e) => {
            setProductDesc(e.target.value);
          }}
          type="text"
          required
        />

        <label>Product Category</label>
        <input
          value={productCateg}
          onChange={(e) => {
            setProductCateg(e.target.value);
          }}
          type="text"
          required
        />

        <label>Price</label>
        <input
          value={productPrice}
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
          type="number"
          required
        />

        <label>Stock</label>
        <input
          value={productStock}
          onChange={(e) => {
            setProductStock(e.target.value);
          }}
          type="number"
          required
        />

        <label>Image</label>
        <p>
          --Image was otomaticlly will be filled because this project saving
          data using json-server--
        </p>

        <button onClick={handleAddProduct}>Add Product</button>
        <button>cancle</button>
      </div>
    </>
  );
};

export default AddProduct;
