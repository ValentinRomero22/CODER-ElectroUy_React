import logo from '../img/logo.png';
import usuario from '../img/usuario.png'
import '../sass/app.scss';

const navbar = () => {
    return (
      <header>
        <div className="marca">
          <div>
            <img src={logo} alt="Logo"></img>
          </div>
          <div>
            <h1>Electro UY</h1>
          </div>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#"></a>Imagen y sonido</li>
            <li><a href="#"></a>Cocina</li>
            <li><a href="#"></a>Frío y calor</li>
            <li><a href="#"></a>Hogar</li>
            <li><a href="#"></a>Otros</li>
          </ul>
        </div>
        <div className="box-searcher">
          <input type="text" placeholder="Buscar" className="searcher"/>
        </div>
        <div className="user">
          <a href="#"><img src={usuario} alt="Usuario"></img></a>
        </div>
      </header>
    );
  }
  
  export default navbar