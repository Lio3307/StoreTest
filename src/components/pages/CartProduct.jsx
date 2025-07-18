import useCart from "../../state/useCart";

const CartProduct = () => {
    const {productInCart} = useCart();
    return (
        <>
            {productInCart.length === 0 ? (<h3 className="text-center mt-[1.6rem]">You Dont Have Item On Your Cart...</h3>) : productInCart.map((products) => {
                {products.title.slice(0, 20) + ("...")}
                {products.price}
            })}
        </>
    )
}

export default CartProduct;