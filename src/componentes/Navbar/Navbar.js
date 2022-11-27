import "./Navbar.scss";
import CartWidget from "../CartWidget/CartWidget";
import{ Link, } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap";


const NavbarReact  = () => {

    return (
    <>
        <Navbar className="container header__container"  expand="lg">
            <Container className=" ">
                <Link to={"/"}  ><img src="./imgs/alba.jpg" className="logo"></img></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" header__navbar">
                            <Nav.Link as={Link} to="/" className= "header__navlink" >Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/nosotros" className= "header__navlink">Nosotros</Nav.Link>
                            <Nav.Link as={Link} to="/contacto" className= "header__navlink">Contacto</Nav.Link>
                <CartWidget/>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
        )
    }
    
    export default NavbarReact
    // <header className="header">
    //     <div className="header__container">
            

    //         
    //         <nav className="header__navbar">
    //             <Link to= {"/categorias/pashminas"} className= "header__navlink">Pashminas</Link>
    //             <Link to= {"/categorias/gorros"} className= "header__navlink">Gorros</Link>
    //             <Link to= {"/categorias/bufandas"} className= "header__navlink">Bufandas</Link>
    //             <Link to= {"/contacto"} className= "header__navlink">contacto</Link>
    //             <Link to= {"/nosotros"} className= "header__navlink">nosotros</Link>
                
    //         </nav>
             
    //            <CartWidget/>
            
    //      </div>   
    // </header>