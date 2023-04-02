import React from "react"
import Navbar from "../components/Navbar.js"

import Footer from "../components/Footer"
import AltImg from "../components/AltImg.js"
import Form from "../components/Form.js"
import TmpContact from "../components/TmpContact"
const Contact = ()=>{
    return(
        <div>
             <Navbar/>
             <AltImg heading="CONTACT ME" text="Let's chat"/>
             {/* <Form/> */}
             <TmpContact/>
            <Footer/>
        </div>
    )
   
}
export default Contact;