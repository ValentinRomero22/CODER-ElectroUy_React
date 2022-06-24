import { createContext, useContext, useState } from "react"

const Notification = ({ mensaje, severidad }) =>{

    const estiloNotificacion = {
        position: 'absolute',
        top: 80,
        right: 50,
        width: 'auto',
        height: 'auto',
        backgroundColor: severidad === 'error' ? 'red' : 'green',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '14px',
    }

    if(mensaje === '') return
    
    return(
        <div style={estiloNotificacion}>
            {mensaje}
        </div>
    )
}

const NotificacionContext = createContext()

export const NotificacionProvider = ({ children }) =>{
    const [mensajeNotificacion, setMensajeNotificacion] = useState({
        severidad: 'exito',
        mensaje: ''
    })

    const setNotificacion = (pMensaje, pSeveridad) =>{
        setMensajeNotificacion({ severidad: pSeveridad, mensaje: pMensaje })
        setTimeout(() =>{
            setMensajeNotificacion({...mensajeNotificacion, mensaje: ''})
        }, 2500)
    }

    return(
        <NotificacionContext.Provider value={ setNotificacion }>
            <Notification mensaje = {mensajeNotificacion.mensaje} severidad = {mensajeNotificacion.severidad}/>
            { children }
        </NotificacionContext.Provider>
    )
}

export const useNotification = () =>{
    return useContext(NotificacionContext)
} 