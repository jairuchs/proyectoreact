import { useState } from "react";

const ItemCount = ({handleOnAdd}) => {

    //handleOnAdd("Hola")

    //paso 3 ) recibir el callback como prop

    const [count, setCount] = useState(0);

    /* const handleSumar = (mensaje) => {
        console.log(mensaje)
        setCount(count + 1);
    } */

    //e.stopPropagation()
    //Propagacion de eventos : Bubbling y Capturing
    
    const handleSumar = (e) => {
        console.log(e)
        console.log(e.target)
        e.stopPropagation()
        //const btn = document.querySelector("button"); === e.target
        setCount(count + 1);
    }

    const handleRestar = (e) => {
        console.log(e.target)
        setCount(count - 1);
    }

    const handleChange = (e) => {
        //e.preventDefault()
        const codigo = e.key.charCodeAt()
        if (codigo > 96 && codigo < 123) {
            console.log(e.key,codigo)
        }else{
            e.preventDefault()
        }
    }


    const handleConfirmar = () => { 
        //paso 4 ) ejecutar el callback cuando yo quiero
        handleOnAdd(count)
    }

    const handleDivClick = (e) => {
        console.log(e.target)
    }

    return (
        <div onClick={handleDivClick}>
            <div className="counter-actions">
                <input type="text" onKeyDown={handleChange}/>
                {/* <button onClick={()=>{ handleSumar("Hola") }}>+</button> */}
                <button onClick={handleSumar}>+</button>
                <p>{count}</p>
                <button onClick={handleRestar}>-</button>
            </div>
            <button onClick={handleConfirmar}>confirmar</button>
        </div>
    )

}

export default ItemCount