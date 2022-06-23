import Cart from "../cart/Cart"

const CartContainer = (props) =>{
    return(
        <>
            <h2>{props.titulo}</h2>
            <div className="contendor-carrito">
                <Cart />
            </div>
        </>
    )  
}

export default CartContainer