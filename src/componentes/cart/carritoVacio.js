import { Link } from "react-router-dom"

const CarritoVacio = () => {

    return( 
        <div className="container my-5">
             <h2>Tu carrito esta vacio</h2>
             <hr></hr>

             <Link to="/" className="btn btn-primary">Ir a comprar</Link>
        </div>
    )
}

export default CarritoVacio