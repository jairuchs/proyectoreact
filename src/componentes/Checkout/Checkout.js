import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { collection, getDocs, addDoc, doc, updateDoc, getDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik } from "formik"
import * as Yup from "yup"

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required(`Campo obligatorio`)
                .min(4, `El nombre es demasiado corto`)
                .max(30, `Maximo 30 caracteres`),
    email: Yup.string()
                .required(`Campo obligatorio`)
                .email(`Formato inválido`),
    direccion: Yup.string()
                .required(`Campo obligatorio`)
                .min(4, `El nombre es demasiado corto`)
                .max(30,`Máximo 30 caracteres`),



})

const Checkout = () => {
    
    const { cart, precioTotal, vaciarCarrito } = useCartContext()

    const [ orderId, setOrderId ] = useState(null)

    const generarOrden = async (values) => {
      
        const orden = {
            buyer: values,
            items: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad, nombre, precio})),
            total: precioTotal()
        }

        const batch = writeBatch(db)
        const ordersRer = collection(db, "orders");
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), `in`, cart.map(el => el.id)))
        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)

            if ((doc.data().stock - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
       })

       if (outOfStock.length === 0) {
           addDoc(ordersRer, orden)
             .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                vaciarCarrito()
            })
       } else {
        alert("Hay items sin stock")
       }
     }
        
        if (orderId) {
            return (
                <div className="container my-5">
                <h2>Gracias por su compra!!!</h2>
                <hr/>
                <p>Su numero de orden es: {orderId} </p>
            </div>
        )
    }
    
    if (cart.length === 0){
        return <Navigate to={"/"}/>
    }
    
    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <Formik
                initialValues= { {
                    nombre:``,
                    email:``,
                    direccion:``
                }}
                onSubmit={ generarOrden }
                validationSchema={schema}
                >

                {(formik)=> (
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder={"Nombre"}
                            className="form-control my-2"
                            />
                            {formik.errors.nombre && <p className="alert alert-danger">{formik.errors.nombre}</p>}
                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder={"EMail"}
                            className="form-control my-2"
                            />
                            {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}
                        <input
                            value={formik.values.direccion}
                            name="direccion"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder={"Direccion"}
                            className="form-control my-2"
                            />
                            {formik.errors.direccion && <p className="alert alert-danger">{formik.errors.direccion}</p>}

                        <button type="submit" className="btn btn-primary">Enviar</button>

                    </form>

                )
                }

            </Formik>

          

                 <button onClick={vaciarCarrito} className="btn btn-danger my-2">Cancelar mi Compra</button>
        </div>
               
               )
            }
            
            export default Checkout


            // cart.forEach((item) => {
        
            //     const docRef = doc(db, "productos", item.id)
        
            //     getDoc(docRef)
            //         .then((doc) =>{
            //             if ((doc.data().stock - item.cantidad) >= 0){
            //                 updateDoc(docRef,{
            //                     stock: doc.data().stock - item.cantidad
            //                 })
            //             } else{
            //                alert("Sin stock:" + item.nombre) 
            //             }
            //         })
            // }) 