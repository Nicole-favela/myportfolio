import React from "react"
import Navbar from "../components/Navbar.js"

import Footer from "../components/Footer"
import AltImg from "../components/AltImg.js"
import Form from "../components/Form.js"
import DeskImg from "../components/ResumeImg"
import ResumeContent from "../components/ResumeContent"
const Resume = ()=>{
    return(
        <div>
             <Navbar/>
             <DeskImg heading="Resume" text="Check out my skills and experience"/>
             <ResumeContent/>
            <Footer/>
        </div>
    )
   
}
export default Resume;