import '../../sass/app.scss'
import { Link } from 'react-router-dom'
import WidgetCart from '../widgetCart/WidgetCart'
import { useContext } from 'react'
import CarritoContext from '../../context/CarritoContext'
import { obtenerCategorias } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'
import Menu from '../menu/Menu'

const Navbar = () => {
  const { carrito } = useContext(CarritoContext)

  const {data} = useAsync(() => obtenerCategorias(), [])
  /* const categorias = obtenerCategorias() */

  console.log(data)
  return (
    <header>
      <div className="marca">
        <div>
          <img src='/img/logo.png' alt="Logo"></img>
        </div>
        <div>
          <Link to='/'>
            <h1>Electro UY</h1>
          </Link>
        </div>
      </div>
      <nav>
        <ul className="menu-horizontal">
          {console.log(data)}
        </ul>
      </nav>
      <div className="cart">
        { carrito.length > 0 && <WidgetCart /> }
      </div>
    </header>
  );
}

export default Navbar
