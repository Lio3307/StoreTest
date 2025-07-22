import { useEffect, useState } from "react";
import useProduct from "../../state/useProduct";

const EditProduct = (id) => {

    const [getProductById, setGetProductById] = useState({})

    const {productList} = useProduct();

    useEffect(() => {
        const getProduct = productList.filter(product => product.id === id)

        setGetProductById(...getProduct)
        console.log(getProductById)
        
    }, [])

    return (
        <>
        <label>Product Name</label>
        <input type="text" required />

        <label>Product Description</label>
        <textarea type="text" required/>

        <label>Product Category</label>
        <input type="text" required/>

        <label>Product Price</label>
        <input type="number" required/>


        <label>Product Stock</label>
        <input type="number" required/>
        </>
    )
}

export default EditProduct;