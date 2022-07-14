import Navbar from "./components/navbar/Navbar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import CartContainer from "./components/cartContainer/CartContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from "./context/CarritoContext"
import Checkout from "./components/checkout/Checkout"
import { NotificacionProvider } from "./context/NotificacionContext"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="app">
      <NotificacionProvider>
        <CarritoProvider>
          <BrowserRouter> 
            <Navbar/>
            <Routes>
              <Route path='/' element={ <ItemListContainer /> }/>
              <Route path='/categoria/:categoria' element={ <ItemListContainer /> }/>
              <Route path='/detalle/:id' element={ <ItemDetailContainer titulo='DETALLE DEL PRODUCTO'/> }/>
              <Route path='/cart/' element={ <CartContainer titulo='CARRITO DE COMPRAS' /> }/>
              <Route path='/checkout/' element={ <Checkout titulo='CHECKOUT'/> }/> 
            </Routes>    
          </BrowserRouter>
        </CarritoProvider>
      </NotificacionProvider>
      <Footer />
    </div>
  );
}

export default App;
