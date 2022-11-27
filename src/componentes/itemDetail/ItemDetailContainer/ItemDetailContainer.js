import { useEffect, useState } from 'react';
import Loader from '../../Loader/Loader';
import { useParams } from 'react-router-dom';

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import ItemDetail from './ItemDetail';




const ItemDetailContainer = () => {

const [item, setItem] = useState(null)
const [loading, setloading] = useState(true)

const { itemId } = useParams()



useEffect(()=>{
    setloading(true)

    const docRef = doc(db, "productos", itemId)

    getDoc(docRef)
        .then((doc) => {
            setItem({id: doc.id, ...doc.data()})
        })
        .finally(() =>{
            setloading(false)
        })

  
},[] )    


    return (
        <section className='container'>
            
            {
                loading
                ? <Loader/>
                : <ItemDetail item={item} />
            }
    
        
        </section>
    )
}

export default ItemDetailContainer;