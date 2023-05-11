import "./ProjCardStyles.css"
import proj1 from "../assets/discord_clone_img1.png"
import { NavLink } from "react-router-dom"
import React from "react"
//workcard
const ProjCard = (props)=>{
    return (
        // work-container
        <div className="project-card"> 
                    <img src = {props.imgsrc} alt= "image"/>
                    <h2 className="project-title">{props.title}</h2>
                    <div className="pro-details">
                        <p>{props.text}</p>
                        <div className="pro-btns">
                            <NavLink to={props.view}className="btn" >View on github</NavLink>
                            {props.site !== "" && <NavLink to={props.site}className="btn" >Visit site</NavLink> }
                           {/* maybe change to more details/ published site */}
                            {/* <NavLink to="url.com" className="btn" >Source</NavLink> */}
                        </div>
                    </div>
        </div>
    )
}
export default ProjCard; 