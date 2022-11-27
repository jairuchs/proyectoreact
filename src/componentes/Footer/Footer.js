import "./Footer.scss"
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs"


const Footer = () => {
    return(
        <section class="pie-pagina">

        <div class="grupo-1">

            <div class="box">
                <h3>CONTACTO:</h3>
                <p>Tel:1545687402</p>
                <p>alba_ok@gmail.com</p>
                <p>Av. Mitre 5687</p>
                <p>Berazategui</p>
            </div>

            <div class="box">
                <h3>¡SEGUINOS!</h3>
                <div class="redes">
                    <BsFacebook className="redes_link face"/>
                    <BsInstagram className="redes_link insta"/>
                    <BsWhatsapp className="redes_link whats"/>
                </div>
            </div>

        </div>

        <div class="grupo-2">
            <p>&copy; 2022 Todos los derechos reservados</p>
        </div>

    </section>
    )
}

export default Footer