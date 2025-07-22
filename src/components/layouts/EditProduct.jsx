const EditProduct = () => {
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