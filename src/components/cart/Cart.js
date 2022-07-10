import { useContext } from "react"
import CartItem from "../cartItem/CartItem"
import CarritoProvider from "../../context/CarritoContext"
import { useNotification } from "../../notification/Notification"
import { addDoc, collection, writeBatch, getDocs, documentId, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useState } from 'react'
import Louder from '../louder/Louder'

const Cart = ({ items }) =>{

    let total = 0
    items.forEach(item => {
        total += item.precio * item.cantidad
    });

    const {limpiarCarrito, eliminarItem, carrito} = useContext(CarritoProvider)
    const [cargador, setCargador] = useState(false)

    const setNotificacion = useNotification()

    const handleEliminar = (id, nombre) =>{
        eliminarItem(id)
        setNotificacion(`Eliminaste ${nombre} del carrito` , 'exito')
    }

    const handleVaciar = () =>{
        limpiarCarrito()
    }

    const handleCrearOrden = () => {
        setCargador(true)

        const orden = {
            comprador: {
                nombre: 'Valentín Romero',
                telefono: '099856093',
                email: 'valentinrq22@gmail.com',
                direccion: 'Miguelete 2039'
            },
            items: carrito,
            total
        }

        const batch = writeBatch(db)
        const ids = carrito.map(p => p.id)
        const sinStock = []

        const coleccion = collection(db, 'productos')
        getDocs(query(coleccion, where(documentId(), 'in', ids))).then(response =>{
            response.docs.forEach(doc => {
                const dataDocumento = doc.data()
                const itemCantidad = carrito.find(p => p.id === doc.id).cantidad

                if(dataDocumento.stock >= itemCantidad){
                    batch.update(doc.ref, {stock: dataDocumento.stock - itemCantidad})
                } 
                else{
                    sinStock.push({ id: doc.id, ...dataDocumento})
                }
            })
        }).then(() => {
            if(sinStock.length === 0){
                const coleccion = collection(db, 'ordenes')
                return addDoc(coleccion, orden)
            }
            else{
                return Promise.reject({ type: 'sinstock', productos: sinStock })
            }
        }).then(({ id }) => {
            batch.commit()
            limpiarCarrito()
            setNotificacion('Orden creada', 'exito')
        }).catch(error =>{
            if(error.type === 'sinstock'){
                //sinStock.forEach()
                //puedo eliminar el producto del carrito si el stock == 0
                setNotificacion('Productos sin stock', 'error')
            }
            else{
                setNotificacion('Error inesperado', 'error')
            }
        }).finally(() =>{
            setCargador(false)
        })
    }

    if(cargador){
        return <Louder />
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
                        <button className="boton" onClick={handleCrearOrden}>Confirmar pedido</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart