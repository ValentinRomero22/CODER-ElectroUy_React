import logo from './img/logo.png';
import './sass/app.scss';

function App() {
  return (
    <header>
      <div className="marca">
        <img src={logo} alt="Logo"></img>
        <p>Electro UY</p>
      </div>
      <div className="menu">
        <ul className="listaMenu">
          <li><a href="#"></a>Imagen y sonido</li>
          <li><a href="#"></a>Cocina</li>
          <li><a href="#"></a>Frío y calor</li>
          <li><a href="#"></a>Hogar</li>
          <li><a href="#"></a>Otros</li>
        </ul>
      </div>
      <div className="searcher">
        <p>Electro UY</p>
      </div>
      <div className="user">
        <img src={logo} alt="Otro"></img>
      </div>
    </header>
  );
}

export default App;
