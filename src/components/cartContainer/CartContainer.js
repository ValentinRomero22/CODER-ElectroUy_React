import Cart from "../cart/Cart"
import { useContext } from "react";
import CarritoProvider from "../../context/CarritoContext";

const CartContainer = (props) =>{
    const {obtenerItemsCarrito} = useContext(CarritoProvider)
    const itemsCarrito = obtenerItemsCarrito()

    return(
        <>
            <h2>{props.titulo}</h2>
            {(itemsCarrito.length != 0) ?
            <div className="contendor-carrito"><Cart items={itemsCarrito}/></div> :
            <h3>Su carrito de compras está vacío</h3>}
        </>
    )  
}

export default CartContainer