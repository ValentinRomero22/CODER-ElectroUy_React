import { useContext } from 'react';
import CarritoContext from '../../context/CarritoContext';
import carrito from '../../img/carrito.png'
import { Link } from 'react-router-dom';

const WidgetCart = () =>{
    const { cantidadTotal } = useContext(CarritoContext)

    return(
        <div className='widget-carrito'>
            <Link to='/cart'><img src={carrito} alt="Usuario"></img></Link>
            {cantidadTotal}
        </div>
    )
}

export default WidgetCart