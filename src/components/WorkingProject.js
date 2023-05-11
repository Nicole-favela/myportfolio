import "./ProjCardStyles.css"
import ProjCard from "./ProjCard"
import ProjectData from "./ProjectCardData"
// import proj1 from "../assets/discord_clone_img1.png"
// import { NavLink } from "react-router-dom"
import React from "react"
// frame for project info
const WorkingProject = ()=>{
    return (
        <div className="work-container">
            <h1 className="project-heading">projects</h1>
            <div className="project-container">
                {ProjectData.map((val,ind)=>{
                    return(
                        <ProjCard 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        site={val.site}

                        />

                    )
                })}
              

                </div>
            </div>
            
        
    );
}
export default WorkingProject;