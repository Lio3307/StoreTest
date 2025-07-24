import { useState } from "react";
import ProductCard from "../layouts/ProductCard";
import useProduct from "../../state/useProduct";

const Home = () => {

  return (
    <>
      <div className="container">

      <ProductCard />
      </div>
    </>
  );
};

export default Home;
