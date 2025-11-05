import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import HideOnScroll from './components/HideOnScroll';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <HideOnScroll>
            <div style={{ position: 'sticky', top: 0, zIndex: 1100 }}>
              {/*Just for the animation*/}
              <Navbar />
            </div>
          </HideOnScroll>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryID"
              element={<ItemListContainer />}
            />
            <Route path="/book/:itemID" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<ItemListContainer />} />
            <Route path="*" element={<h1>Error 404 Site not found</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
