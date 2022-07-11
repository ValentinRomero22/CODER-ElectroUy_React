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

    const contenedorNotificacion = {
        position: 'relative',
        marginTop: '10px',
        width: 'auto',
        height: 'auto',
        backgroundColor: tipo === 'error' ? 'red' : 'green',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '14px',
    } 

    return(
        <NotificacionContext.Provider value={ agregarNotificacion }>
            { children }
            <div style={contenedorNotificaciones}>
                {mensajes.map(n => (
                    <div style={contenedorNotificacion} key={n}>
                        {n}
                    </div>
                ))}
            </div>
        </NotificacionContext.Provider>
    )
}