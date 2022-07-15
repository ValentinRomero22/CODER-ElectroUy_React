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

  const { cargando, data } = useAsync(() => obtenerCategorias(), [])

  return (
    <header>
      <div className="marca">
        <div>
          <img src='https://drive.google.com/uc?export=view&id=1Mix8tF52xU1IKXlVHibR_3N-MomTrTRt' alt="Logo"></img>
        </div>
        <div>
          <Link to='/'>
            <h1>Electro UY</h1>
          </Link>
        </div>
      </div>
      <nav>
        <ul className="menu-horizontal">
          { !cargando && <Menu categorias={data} /> }
        </ul>
      </nav>
      <div className="cart">
        { (carrito != null || carrito.length > 0) && <WidgetCart /> }
      </div>
    </header>
  );
}

export default Navbar
