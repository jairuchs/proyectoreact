import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.scss"



const ItemDetail = ({ item }) => {

 const {addItem, isInCart} = useContext(CartContext)
 

 const [cantidad, setCantidad] = useState(1)

 const navigate = useNavigate()

 const handleVolver = () => {
     navigate(-1)
 }
 
 const handleAgregar = () => {
    const itemToCart = {
        ...item,
        cantidad
    }
    addItem(itemToCart)
}


    return (           
         <div className="detalle">                 
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.img} />
            <h4><b>Precio</b>:${item.precio} </h4>
            <p>{item.desc}</p>
            <hr/>

            {
            isInCart(item.id)
                                    
            ? <Link to="/cart"  ><button className="finalizar">FINALIZAR COMPRA</button></Link>
            :
                                    
            <ItemCount 
                initial="1" 
                stock= {item.stock} 
                setCounter={setCantidad} 
                counter={cantidad} 
                handleAgregar={handleAgregar}
                />

            }   

            <br></br>
             <button onClick={handleVolver}> VOLVER </button>
                       
        </div>
               
    );
}

export default ItemDetail; 