import { useState } from "react"



const Contacto = () => {

    const [values, setValues] = useState({
        nombre: ``,
        mail: ``,
        telefono:``
    })

    const handelInputChange = (e) =>{
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log("submit")
        console.log(values)
        
    }

    return(
            <div className="container my-5">
                <h2>Contacte con nosotros</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <h4>Datos personales</h4>

                    <input
                        name="nombre"
                        onChange={handelInputChange}
                        value={values.nombre}
                        placeholder="Nombre"
                        type={`text`}
                        className="form-control my-2"/>

                    <input
                        name="mail"
                        onChange={handelInputChange}
                        value={values.mail}
                        placeholder="EMail"
                        type={`email`}
                        className="form-control my-2"/>

                    <input
                        name="telefono"
                        onChange={handelInputChange}
                        placeholder="Telefono"
                        value={values.telefono}
                        type={`number`}
                        className="form-control my-2"/>

                    <button type={"submit"} className="btn btn-primary">ENVIAR</button>


                </form>

            </div>

)

}

export default Contacto


    // const handleClick = (e) =>{
    //     e.stopPropagation()
    //     console.log(e)
    // }

    //     useEffect(()=>{

    // const clickear = (e) =>{
    //     console.log(e)

    // }

    //     window.addEventListener(`click`, clickear)

    //     return ()=>{
    //         window.removeEventListener(`click`, clickear )
    //     }
    // })


    // const [nombre, setNombre] = useState(``)
    // const [mail, setMail] = useState(``)

    // const handlenombre = (e) =>{
    //     console.log(e.target.value)
    //     setNombre(e.target.value)
    // }

    // const handleMail = (e) =>{
    //     console.log(e.target.value)
    //     setMail(e.target.value)
    // }

    // const datos={
    //     nombre,
    //     mail
    // }