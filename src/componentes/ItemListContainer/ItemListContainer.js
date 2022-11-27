import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemlist/itemList';
import Loader from '../Loader/Loader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import "./ItemListContainer.scss"



const ItemListContainer = ()=>{

    const [items, setItems] = useState([])
    const [loading, setloading] = useState(true)

    const {categoryId} = useParams()
    

    useEffect(()=>{
        setloading(true)
        
        //1 armar la referencia
        const productosRef = collection(db, "productos" )
        const q = categoryId? query(productosRef, where("categoria", "==", categoryId) ): productosRef;

        //2 async- llamar a firebase con la ref anterior
        getDocs(q)
            .then((resp) =>{
                const newItems = resp.docs.map((doc) =>{
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                console.log(newItems)
                 setItems(newItems)
            })
            .finally(()=>{
                setloading(false)
             })




    },[categoryId] )    


    return (

        
        <section className="productos_container">
                <div className='productos'>
    
                    {
                        loading
                        ?   <Loader/>

                        : <ItemList items={items}/>
                    }

                </div>
               
        </section>
    )
}

export default ItemListContainer;