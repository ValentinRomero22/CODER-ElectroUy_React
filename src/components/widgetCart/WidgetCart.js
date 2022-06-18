import { useContext } from 'react';
import CarritoContext from '../../context/CarritoContext';
import usuario from '../../img/usuario.png'

const WidgetCart = () =>{
    const { obtenerCantidadDeProductos } = useContext(CarritoContext)
    const cantidadTotal = obtenerCantidadDeProductos()

    return(
        <div>
            <a href="#"><img src={usuario} alt="Usuario"></img></a>
            {cantidadTotal}
        </div>
    )
}

export default WidgetCart