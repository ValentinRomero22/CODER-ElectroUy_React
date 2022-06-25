const CartItem = ({ id, nombre, precio, cantidad, eliminar}) =>{  
    
    const subtotal = precio * cantidad
    
    return(
        <>
            <div className="carrito-item">
                <div className="carrito-item-seccion">{nombre}</div>
                <div className="carrito-item-seccion">Cantidad: {cantidad}</div>
                <div className="carrito-item-seccion">Precio: $ {precio}</div>
                <div className="carrito-item-seccion">Subtotal: $ {subtotal}</div>
                <div className="carrito-item-seccion">
                    <button className="boton-terminar" onClick={() => eliminar(id, nombre)}>Quitar del carrito</button>
                </div>
            </div>
        </>
    )
}

export default CartItem