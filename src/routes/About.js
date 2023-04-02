import React from "react"
import Navbar from "../components/Navbar.js"
import AltImg from "../components/AltImg.js"
import Footer from "../components/Footer"
import AboutContent from "../components/AboutContent.js"
const About = ()=>{
    return(
        <div>
             <Navbar/>
             <AltImg heading= "ABOUT" text="I'm a software engineer"/>
             <AboutContent/>
            <Footer/>
        </div>
    )
   
}
export default About;