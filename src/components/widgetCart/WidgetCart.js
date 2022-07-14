import { useContext } from 'react';
import CarritoContext from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const WidgetCart = () =>{
    const { cantidadTotal } = useContext(CarritoContext)

    return(
        <div className='widget-carrito'>
            <Link 
                to='/cart/'>
                <img 
                    src="https://drive.google.com/uc?export=view&id=1d8xfgyBkz4zIyGnU67VEbzLR6CgC0K1e" 
                    alt="Carrito">
                </img>
            </Link>
            {cantidadTotal}
        </div>
    )
}

export default WidgetCart