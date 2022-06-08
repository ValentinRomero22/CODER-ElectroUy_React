import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  /* const [page, setPage] = useState('lista') */

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer titulo='Listado de productos'/> }/>
          <Route path='/categoria/:categoria' element={ <ItemListContainer titulo='Listado de productos'/> }/>
          <Route path='/detalle/:id' element={ <ItemDetailContainer/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
