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
    const accomplishments = `What excites me most is the transformative journey from 0 to 100—building captivating applications from the ground up. One of my recent accomplishments is a Netflix clone that mirrors the original platform, offering a great UI/UX experience while diving into new movie trailers. This project challenged me to excel in both front-end design and back-end intricacies by integrating data from the TMDB API, Redux for complex state management, user authentication, cookies, and MUI components. I’d love for you to experience it for yourself on my projects page.
    `
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