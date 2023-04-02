import "./AboutContentStyles.css"

import React from "react"
import cuterobot from "../assets/robot_contact_pic1.avif"
import {Link} from "react-router-dom"

const AboutContent=()=>{
    return (
        <div className="about">
            <div className="left">
                <h1> Who am I?</h1> 
                <p> I graduated Magna Cum Laude in 2022 with a B.S. in Computer Science. I love learning new things and building web applications in my free time. 
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
