import { Link } from "react-router-dom"
import "./item.scss"

const Item = ({item}) =>{

    return (
        <div className= "item_container">
                <div className="item_img">
                    <h2>{item.nombre}</h2>
                    <img src={item.img}/>
                    <p>{item.desc} </p>
                    <h4>Stock:{item.stock}</h4>
                    <h4><b>Precio:</b>${item.precio}</h4>

                    <Link to= {`/item/${item.id}`}>
                        <button className="verMas">VER MAS</button>
                    </Link>
                </div> 
        </div>
    )
}

export default Item