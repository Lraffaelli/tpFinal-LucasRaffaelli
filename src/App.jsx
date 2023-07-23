import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";
import CartListContainer from "./components/CartListContainer/CartListContainer";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria"element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartListContainer />} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
          <Footer/>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
