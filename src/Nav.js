import React from "react"
import { Link, NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="nav">
            <NavLink className="nav__link link" to="/productos">productos</NavLink>
            <NavLink className="nav__link link" to="/productos/remeras">remeras</NavLink>
            <NavLink className="nav__link link" to="/productos/camperas">camperas</NavLink>
            <NavLink className="nav__link link" to="/carrito">carrito</NavLink>
        </nav>
    )
}

export default Nav