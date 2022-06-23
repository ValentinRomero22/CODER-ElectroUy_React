import { useContext } from "react";
import CartItem from "../cartItem/CartItem";
import CarritoProvider from "../../context/CarritoContext";

const Cart = () =>{
    const {obtenerItemsCarrito} = useContext(CarritoProvider)
    const _items = obtenerItemsCarrito()
    
    return(
        <div>
            {_items.map(i => <CartItem key = {i.nombre} {...i}/>)}
        </div>
    )
}

export default Cart