import "./AboutContentStyles.css"

import React from "react"
import cuterobot from "../assets/robot_contact_pic1.avif"
import {Link} from "react-router-dom"

const AboutContent=()=>{
    const bio = `Hey there! I'm Nicole, breaking barriers as the first in my family to earn a STEM degree. Graduating Magna Cum Laude in 2022 with a B.S. in Computer Science was a pivotal moment, solidifying my dedication to crafting solutions in the ever-evolving tech landscape.
    As an advocate for diversity in tech, I’m a proud member of organizations like SWE and RTC. My mission extends beyond coding; I aspire to bridge the gender gap by inspiring the next generation of women in engineering. It's not just about writing code; it's about fostering an inclusive tech community.`
    return (
        <div className="about">
            <div className="left">
                <h1> Who am I?</h1> 
                <p>{bio}</p>
                
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
