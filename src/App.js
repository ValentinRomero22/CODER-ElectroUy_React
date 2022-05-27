import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer texto='Electro UY'></ItemListContainer>
    </div>
  );
}

export default App;
