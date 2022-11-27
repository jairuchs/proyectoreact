import { createContext, useContext, useState } from "react";


const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
 }

export const CartProvider = ({children}) => {


    const [cart, setCart] = useState([])
    console.log(cart)
  
    
    const addItem = (item) => {
      setCart([...cart, item])
    }
  
    
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }
  
  const precioTotal = () => {
    return cart.reduce ( (acc, prod) => acc += (prod.precio * prod.cantidad), 0 )
  }
  
  const cantidadTotal = () => {
    return cart.reduce((acc, prod) => acc += prod.cantidad, 0 )
  }
  
  const vaciarCarrito = () => {
    setCart([])
  }

  const eliminarItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id) )
  }

    return(
        <CartContext.Provider value={{cart, addItem, isInCart, precioTotal, cantidadTotal, vaciarCarrito, eliminarItem}} >
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
