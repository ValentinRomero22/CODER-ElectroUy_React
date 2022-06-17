import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CarritoProvider from "./context/CarritoContext";

function App() {
  return (
    <div>
      <CarritoProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer titulo='Listado de productos'/> }/>
            <Route path='/categoria/:categoria' element={ <ItemListContainer titulo='Listado de productos'/> }/>
            <Route path='/detalle/:id' element={ <ItemDetailContainer/> }/>
          </Routes>
        </BrowserRouter>
      </CarritoProvider>
    </div>
  );
}

export default App;
