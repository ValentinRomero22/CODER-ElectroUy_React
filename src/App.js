import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";

function App() {
  const [carrito, setCarrito] = useState([])
  console.log(carrito)

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer titulo='Listado de productos'/> }/>
          <Route path='/categoria/:categoria' element={ <ItemListContainer titulo='Listado de productos'/> }/>
          <Route path='/detalle/:id' element={ <ItemDetailContainer setCarrito={setCarrito}/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
