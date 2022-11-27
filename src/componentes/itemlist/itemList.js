import Item from "../Item/item";
import "./ItemList.scss"
import Botones from "../Botones/Botones";

const ItemList = ({items} ) =>{ 

    return (
        <div >
            <Botones/>
                 
                <h2 className="titulo">Nuestros productos</h2>
                
                <div className="items">
                {
                items.map((item) => <Item key={item.id} item={item}/> )
                 }
               </div>
        </div>
    )           
}

export default ItemList;








    