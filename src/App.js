import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

import { ToastContainer } from "react-toastify"

function App() {

    return (
        <div>
            <Header/>
            <Main />
            <Footer />
            <ToastContainer/>
        </div>
    )
}

export default App