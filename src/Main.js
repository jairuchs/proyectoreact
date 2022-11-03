import React from 'react';
import { Routes , Route } from "react-router-dom"
import Home from './Home';
import Carrito from "./Carrito"
import ItemListContainer from './ItemListContainer';
//Routes : Es un container de uno o mas Route y se ejecuta cada vez que cambia la URL
//Route : Define que componente se muestra en base a la URL

const Main = () => {
    
    return (
        <main>
            <Routes>

                <Route path='/' element={<Home/>}/>
                
                <Route path="/productos" element={<ItemListContainer/>}/>

                <Route path="/productos/:cat"  element={<ItemListContainer/>}/>
                
                <Route path='/carrito' element={<Carrito/>}/>

                <Route path='*' element={<h1>404</h1>}/>

            </Routes>
        </main>
    )
}

export default Main