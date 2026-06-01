import "./BackGroundImgStyles.css"
import React from 'react'
import PortfolioImg1 from "../assets/portfoliopic1.jpeg"
//import PortfolioImg2 from "../assets/portfolio_img3.avif"
import PortfolioImg2 from "../assets/homepagebackground.png"
import {Link} from 'react-router-dom'

const BackGroundImg = ()=>{
    // const landingPageHeadline = `Enthusiastic Coder solving complex puzzles`
    const landingPageHeadline = `I’m a Software Engineer with a recently completed M.S. in Computer Science, passionate about backend development, AI, and building thoughtful technology that solves real-world problems. I currently work at an AI startup in the mental health space, developing solutions at the intersection of technology and human wellbeing. Previously, I led engineering efforts at an early-stage startup in the social media space. I enjoy solving complex technical challenges, learning continuously, and building scalable products that bridge user needs with impactful technology. I’m currently open to new opportunities in full-stack engineering, software engineering, and AI-focused roles.
`
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