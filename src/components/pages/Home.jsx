import { Link } from "react-router-dom";
import ProductCard from "../layouts/ProductCard"

const Home = () => {
    return(
        <>
            <Link to='/cart-product' className="text-white p-3 bg-slate-700 cursor-pointer hover:bg-slate-800">Cart</Link>
            <ProductCard/>
        </>
    );
}

export default Home;