import "./BackGroundImgStyles.css"
import React from 'react'
import PortfolioImg1 from "../assets/portfoliopic1.jpeg"
import PortfolioImg2 from "../assets/portfolio_img3.avif"
import {Link} from 'react-router-dom'

const BackGroundImg = ()=>{
    return(
        <div className="background">
            <div className= "mask">
                <img className="portfolio-p1" src = {PortfolioImg2} alt = "PortfolioImg"/>

            </div >
            <div className="content">
            <p>Hi, My name is Nicole.</p>
            <h1>I'm passionate about developing solutions to complex problems.</h1>
            {/* <h1>let's code a better future</h1> */}

                <div>
                    <Link to ='/project' className="btn">Projects</Link>
                    <Link to ='/contact' className="btn-light">Contact</Link>
                </div>
            </div>

        </div>
    )
}
export default BackGroundImg