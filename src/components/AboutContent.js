import "./AboutContentStyles.css"

import React from "react"
import cuterobot from "../assets/robot_contact_pic1.avif"
import {Link} from "react-router-dom"

const AboutContent=()=>{
    return (
        <div className="about">
            <div className="left">
                <h1> Who am I?</h1> 
                <p> I'm the first in my family to get a STEM degree. I graduated Magna Cum Laude in 2022 with a B.S. in Computer Science. I'm a member of SWE and RTC because I believe there is a need for more women in tech and I hope to inspire the next generation of women in engineering. I love learning new things and building web applications in my free time (while listening to music of course). 
                </p>
                
                <Link to ="/contact">
                    <button className="btn">Contact</button>
                </Link>
                    
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={cuterobot} className="img" alt="true"/>
                    </div>
                    {/* another image in div tag goes here */}
                </div>
            </div>
            
        </div>
    )
}
export default AboutContent
