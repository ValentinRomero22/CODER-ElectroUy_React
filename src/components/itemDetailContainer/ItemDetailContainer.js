
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore"
import { useNotification } from "../../notification/Notification"
import Louder from '../louder/Louder'
import { useAsync } from "../../hooks/useAsync"

const ItemDetailContainer = (props) =>{
    const {id} = useParams()
    const setNotificacion = useNotification()

    const docFirebase = doc(db, 'productos', id) 
    const {cargando, data, error} = useAsync(() => getDoc(docFirebase), [id])
    
    if(cargando){
        return <Louder />
    }
    
    if(error){
        setNotificacion('Se produjo un error inesperado' , 'error')
    }
    
    const producto = { id: data.id, ...data.data() }

    return(
        <>
            <h2>{props.titulo}</h2>
            <ItemDetail {...producto} />
        </>
    )
}

export default ItemDetailContainer