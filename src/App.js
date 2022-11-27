import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';
import NavbarReact from './componentes/Navbar/Navbar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Nosotros from "./componentes/Nosotros/Nosotros"
import Contacto from "./componentes/Contacto/Contacto"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './componentes/itemDetail/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/cart/cart';
import  { CartProvider } from './componentes/context/CartContext';
import Checkout from './componentes/Checkout/Checkout';
import { Navigate } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import Pagos from './componentes/Pagos/Pagos';




function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      

          <CartProvider>

            <BrowserRouter>
                  <NavbarReact/> 
                  

                  <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path='/nosotros' element={ <Nosotros/>} />
                    <Route path='/contacto' element={<Contacto/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='*' element={<Navigate to={"/"} />} />
                  </Routes>
            </BrowserRouter>
          
          </CartProvider>


          <Pagos/>
          <Footer/>

  
     
      </header>
  
    </div>
  );
}

export default App;