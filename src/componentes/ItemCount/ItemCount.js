import "./ItemCount.scss"
import swal from "sweetalert"

const ItemCount = ({stock, setCounter, counter, handleAgregar}) => {
    
    const handleSumar = ()=> {
        if(counter < stock){
            setCounter(counter + 1)
        }else{
             swal("NO HAY STOCK!!!")
            }
}

    const handleRestar = ()=> {
    counter  > 1  && setCounter(counter - 1)
   }

if (stock === 0) {
    return(
         <div className="my-3">
        <p>SIN STOCK!!!</p>
    </div>
    )
}



return(
        <div className="counter">
            
            <h4><b>Stock: </b>{stock} </h4>
            <div className="counter_number">
                <button className={counter === 1? "btn btn-danger" : "btn btn-primary" } 
                        onClick={handleRestar}>-</button>

                        <h4> {counter} </h4>

                <button className={counter === stock ? "btn btn-danger":"btn btn-primary"} 
                        onClick={handleSumar}>+</button>
            </div>
        
            <button className="agregar" onClick={handleAgregar}>AGREGAR AL CARRITO</button>
           
        </div>
)
}

export default ItemCount