import "./BackGroundImgStyles.css"
import React from 'react'
// import PortfolioImg1 from "../assets/portfoliopic1.jpeg"
// import PortfolioImg2 from "../assets/portfolio_img3.avif"
import PortfolioImg2 from "../assets/desk_img.avif"
//import ResumeImg2 from "../assets/laptop_pic2.avif"
import ResumeImg2 from "../assets/resumepagebackground.png"
import {Link} from 'react-router-dom'
//background for resume page
const ResumeImg = ()=>{
    return(
        <div className="background">
            <div className= "mask">
                <img className="portfolio-p1" src = {ResumeImg2} alt = "PortfolioImg"/>

            </div >
            <div className="content">
            {/* <p>Hi, My name is Nicole.</p> */}
            <h4>I'm a highly motivated recent UTEP graduate who's looking to bring my programming and analytical skills to work on complex problems. As a software engineer, I'm always learning new things as technolgy evolves.</h4>
            {/* <h1>let's code a better future</h1> */}

                <div>
                    <Link to ='/project' className="btn">Projects</Link>
                    <Link to ='/contact' className="btn-light">Contact</Link>
                </div>
            </div>

        </div>
    )
}
export default ResumeImg