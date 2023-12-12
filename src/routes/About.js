import React from "react"
import Navbar from "../components/Navbar.js"
import AltImg from "../components/AltImg.js"
import Footer from "../components/Footer"
import AboutContent from "../components/AboutContent.js"
const About = ()=>{
    const bio = `What fuels my dedication to software engineering is a perpetual pursuit of self-improvement. I believe that the essence of a great software engineer lies in their commitment to learning and unwavering determination to tackle any problem that comes their way.`
    return(
        <div>
             <Navbar/>
             <AltImg heading= "ABOUT" text={bio}/>
             <AboutContent/>
            <Footer/>
        </div>
    )
   
}
export default About;