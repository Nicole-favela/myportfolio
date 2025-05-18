import "./BackGroundImgStyles.css"
import React from 'react'
import PortfolioImg1 from "../assets/portfoliopic1.jpeg"
//import PortfolioImg2 from "../assets/portfolio_img3.avif"
import PortfolioImg2 from "../assets/homepagebackground.png"
import {Link} from 'react-router-dom'

const BackGroundImg = ()=>{
    // const landingPageHeadline = `Enthusiastic Coder solving complex puzzles`
    const landingPageHeadline = `I’m a driven Software Engineer and current Master’s Computer Science with a passion for backend development and AI. I previously led engineering efforts at an early-stage startup in the social media space. I enjoy solving complex problems, learning new skills and building real-world solutions that bridge user needs with powerful technology.`
    return(
        <div className="background">
            <div className= "mask">
                <img className="portfolio-p1" src = {PortfolioImg2} alt = "PortfolioImg"/>

            </div >
            <div className="content">
            <p>Hi, My name is Nicole.</p>
            <h3>{landingPageHeadline}</h3>
    
                <div>
                    <Link to ='/project' className="btn">Projects</Link>
                    <Link to ='/contact' className="btn-light">Contact</Link>
                </div>
            </div>

        </div>
    )
}
export default BackGroundImg