import {useCartContext} from "../context/CartContext"
import { BsTrash } from "react-icons/bs"
import CarritoVacio from "./carritoVacio"
import { Link } from "react-router-dom"
import "./cart.scss"


const Cart = () => {

const {cart, precioTotal, vaciarCarrito, eliminarItem} = useCartContext()

if (cart.length === 0) return <CarritoVacio/>
   

    return (
        <section>
             <h2>Mi Carrito</h2>
        <div className="carrito">
        
        <div className="carrito_items">
            {
             cart.map((item) => (
                <div key={item.id} className="">
                    <h3>{item.nombre}</h3>
                    <p>Cantidad:{item.cantidad}</p>
                    <h6>Precio: ${item.precio * item.cantidad}</h6>
                    <button onClick={() => eliminarItem(item.id)} className="btn btn-danger"><BsTrash/></button>
                    <hr/>
                </div>
             ))

            }
        </div>



                <h4>TOTAL: ${precioTotal()} </h4>  
                <button onClick={vaciarCarrito} className="bt btn-danger">Vaciar Carrito</button> 
                <Link to="/checkout" className="btn btn-success">TERMINAR MI COMPRA</Link>
        </div>
        </section>
    )
   
}


export default Cart