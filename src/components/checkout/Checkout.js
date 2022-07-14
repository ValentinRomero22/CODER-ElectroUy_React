import { useContext } from "react"
import CarritoProvider from "../../context/CarritoContext"
import { addDoc, collection, writeBatch, getDocs, documentId, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useState } from 'react'
import Louder from '../louder/Louder'
import ClientForm from "../clientForm/ClientForm"
import useNotification from "../../hooks/useNotificacion"
import { Link } from "react-router-dom"

const Checkout = (props) =>{
    const {carrito, obtenerTotal, limpiarCarrito} = useContext(CarritoProvider)
    const [cargador, setCargador] = useState(false)
    const [compra, setCompra] = useState(false)
    const [id, setId] = useState("")
    
    const agregarNotificacion = useNotification()

    const handleAgregar = (mensaje, tipo) =>{
        agregarNotificacion(mensaje, tipo)
    }

    const total = obtenerTotal()

    const handleCrearOrden = (cliente) => {
        setCargador(true)

        const orden = {
            comprador: {
                nombre: cliente.nombre,
                telefono: cliente.telefono,
                email: cliente.email,
                direccion: cliente.direccion,
                pago: cliente.pago
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
            handleAgregar('Compra confirmada!', 'exito')
            setId(id)
            setCompra(true)
            
        }).catch(error =>{
            if(error.type === 'sinstock'){
                sinStock.forEach(p =>{
                    handleAgregar(`No hay stock suficiente de ${p.nombre}`, 'error')
                }) 
            }
            else{
                handleAgregar('Se produjo un error inesperado', 'error')
            }
        }).finally(() =>{
            setCargador(false)
        })
    }

    if(cargador){
        return <Louder />
    }

    /* if(compra){
        handleAgregar('notificacion de compra', 'advertencia')
    } */

    if(compra){
        return(
            <>
                <div className="contenedor-checkout">
                    <h2>{props.titulo}</h2>
                    <h3>Su compra fue registrada con éxito. El ID de su orden es {id}</h3>
                    <div className="contenedor-boton-seguir">
                        <Link to='/' className="boton">Seguir comprando</Link>
                    </div>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className="contenedor-checkout">
                    <h2>{props.titulo}</h2>
                    <ClientForm crearOrden={handleCrearOrden}/>
                </div>
            </>
        )
    }
}

export default Checkout