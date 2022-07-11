import { useContext } from "react"
import CartItem from "../cartItem/CartItem"
import CarritoProvider from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import useNotification from "../../hooks/useNotificacion"

const Cart = ({ items }) =>{
    const {limpiarCarrito, eliminarItem, obtenerTotal} = useContext(CarritoProvider)

    const agregarNotificacion = useNotification()

    const total = obtenerTotal()

    const handleEliminar = (id, nombre) =>{
        eliminarItem(id)
        agregarNotificacion(`Eliminaste ${nombre} del carrito` , 'exito')
    }

    const handleVaciar = () =>{
        limpiarCarrito()
    }

    return(
        <>
            <div className="carrito">
                {items.map(i => <CartItem key = {i.id} {...i} eliminar={handleEliminar}/>)}
                <div className="contenedor-pie-carrito">
                    <div className="pie-carrito-seccion">                            
                        <p>TOTAL: $ {total}</p>
                    </div>
                    <div className="pie-carrito-seccion">                            
                        <button className="boton-terminar" onClick={handleVaciar}>Vaciar carrito</button>
                    </div>
                    <div className="pie-carrito-seccion">
                        <Link className="boton" to='/checkout/'>
                            Confirmar pedido
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart