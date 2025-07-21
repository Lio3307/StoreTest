import { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productCateg, setProductCateg] = useState("");
  const [productPrice, setProductPrice] = useState(null);
  const [productStock, setProductStock] = useState(null);
  const [productImage, setProductImage] = useState(
    "https://picsum.photos/387/192"
  );
  return (
    <>
      <div className="container">
        <label>Product Name</label>
        <input 
        value={productName}
        onChange={(e) => {
            setProductName(e.target.value);
        }}
        type="text" required />

        <label>Product Descrption</label>
        <textarea 
        value={productDesc}
        onChange={(e) => {
            setProductDesc(e.target.value)
        }}
        type="text" required />

        <label>Product Category</label>
        <input 
        value={productCateg}
        onChange={(e) => {
            setProductCateg(e.target.value)
        }}
        type="text" required />

        <label>Price</label>
        <input 
        value={productPrice}
        onChange={(e) => {
            setProductPrice(e.target.value)
        }}
        type="number" required />

        <label>Stock</label>
        <input 
        value={productStock}
        onChange={(e) => {
            setProductStock(e.target.value)
        }}
        type="number" required />

        <label>Image</label>
        <p>
          --Image was otomaticlly will be filled because this project saving
          data using json-server--
        </p>
      </div>
    </>
  );
};

export default AddProduct;
