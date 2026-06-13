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
    const accomplishments = `I’m fascinated by the intersection of software engineering and artificial intelligence. Some of my recent work includes developing a Self-RAG implementation for context-aware knowledge retrieval, training a reinforcement learning agent to master Atari Pong from game-state data, and building developer tooling that automates complex workflows through intuitive command-line interfaces. I enjoy exploring how intelligent systems can solve real-world problems while continuously pushing myself to learn new technologies and techniques.`
    return(
        <div className="background">
            <div className= "mask">
                <img className="portfolio-p1" src = {ResumeImg2} alt = "PortfolioImg"/>

            </div >
            <div className="content">
           
            <h4>{accomplishments}</h4>
          
                <div>
                    <Link to ='/project' className="btn">Projects</Link>
                    <Link to ='/contact' className="btn-light">Contact</Link>
                </div>
            </div>

        </div>
    )
}
export default ResumeImg