import React from 'react'
import "./Botones.scss"
import { Link } from 'react-router-dom'

const Botones = () => {
  return (

     <div className='botones__container'>
         <Link to= {"/categorias/verano"} className= "boton__link boton1">TEAM VERANO</Link>
         <Link to= {"/categorias/invierno"} className= "boton__link boton2">TEAM INVIERNO</Link>
         <Link to= {"/categorias/accesorios"} className= "boton__link boton3">ACCESORIOS</Link>
     </div>

  )
}

export default Botones


