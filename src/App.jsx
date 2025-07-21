import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import DetailsProduct from "./components/layouts/DetailsProduct";
import CartProduct from "./components/pages/CartProduct";
import AddProduct from "./components/pages/AddProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-product/:id" element={<DetailsProduct />} />
        <Route path="/cart-product" element={<CartProduct />} />
        <Route path="/add-product" element={<AddProduct/>}/>
      </Routes>
    </>
  );
}

export default App;
