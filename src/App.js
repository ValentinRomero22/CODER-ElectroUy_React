import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer titulo='Listado de productos'></ItemListContainer>
    </div>
  );
}

export default App;
