import React from "react"

import Navbar from "../components/Navbar.js"
import AltImg from "../components/AltImg.js"

import ProjCard from "../components/ProjCard.js"
import WorkingProject from "../components/WorkingProject.js"

import Footer from "../components/Footer"
const Project = ()=>{
    return(
        <div>
            <Navbar/>
            <AltImg heading="PROJECTS" text = "Some of my most recent projects"/>
            <WorkingProject/>
            <Footer/>
        </div>
    )
   
}
export default Project;