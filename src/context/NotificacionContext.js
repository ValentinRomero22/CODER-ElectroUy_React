import { useState, createContext, useCallback } from "react";

const NotificacionContext = createContext()

export default NotificacionContext

export const NotificacionProvider = ({ children }) => {
    const [mensajes, setMensaje] = useState([])
    const [tipo, setTipo] = useState('exito')

    const agregarNotificacion = useCallback(
        function (mensaje, tipo) {
          setMensaje((mensajes) => [...mensajes, mensaje]);
          setTipo(tipo)
          setTimeout(() => setMensaje((mensajes) => mensajes.slice(1)), 2000);
        }, [setMensaje]
    )
    const contenedorNotificaciones = {
        position: 'absolute',
        top: 80,
        right: 50,
        width: 'auto',
        height: 'auto'
    } 

    let backgroundColor

    switch(tipo){
        case 'error':
            backgroundColor = 'red'
            break
        case 'advertencia':
            backgroundColor = 'blue'
            break
        default:
            backgroundColor = 'green'
    }

    const notificacion = {
        position: 'relative',
        marginTop: '10px',
        width: 'auto',
        height: 'auto',
        color: 'white',
        backgroundColor: backgroundColor,
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '14px',
    }

    return(
        <NotificacionContext.Provider value={ agregarNotificacion }>
            { children }
            <div style={contenedorNotificaciones}>
                {mensajes.map(n => (
                    <div style={notificacion} key={n}>
                        {n}
                    </div>
                ))}
            </div>
        </NotificacionContext.Provider>
    )
}