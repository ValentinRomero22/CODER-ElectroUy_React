import { useContext } from "react";
import CartItem from "../cartItem/CartItem";
import CarritoProvider from "../../context/CarritoContext";
import { useNotification } from "../../notification/Notification"

const Cart = ({ items }) =>{

    let total = 0
    items.forEach(item => {
        total += item.precio * item.cantidad
    });

    const {limpiarCarrito} = useContext(CarritoProvider)
    const {eliminarItem} = useContext(CarritoProvider)

    const setNotificacion = useNotification()

    const handleEliminar = (id, nombre) =>{
        eliminarItem(id)
        setNotificacion(`Eliminaste ${nombre} del carrito` , 'exito')
    }

    const handleVaciar = () =>{
        limpiarCarrito()
    }
    
    return(
        <>
            <div className="carrito">
                {items.map(i => <CartItem key = {i.id} {...i} eliminar={handleEliminar}/>)}
            </div>
            <div className="vaciar-carrito"><button className="boton-terminar" onClick={handleVaciar}>Vaciar carrito</button></div>
            <div className="generar-orden">
                <button className="boton">Generar orden</button>
                <p>TOTAL: $ {total}</p>
            </div>
        </>
    )
}

export default Cart