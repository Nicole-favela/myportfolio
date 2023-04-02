import React from "react"
import Navbar from "../components/Navbar.js"
import BackGroundImg from "../components/BackGroundImg"
import Footer from "../components/Footer"
import WorkingProject from "../components/WorkingProject.js"
const Home = ()=>{
    return(
        <div>
            <Navbar/>
            <BackGroundImg/>
            <WorkingProject/>
            <Footer/>
        </div>
    )
}
export default Home;