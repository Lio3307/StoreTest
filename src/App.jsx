import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import DetailsProduct from "./components/layouts/DetailsProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-product/:id" element={<DetailsProduct />} />
      </Routes>
    </>
  );
}

export default App;
