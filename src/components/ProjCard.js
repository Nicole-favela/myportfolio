import "./ProjCardStyles.css"
import proj1 from "../assets/discord_clone_img1.png"
import { NavLink } from "react-router-dom"
import * as React from "react"
import Button from '@mui/material/Button';
import BasicModal from './BasicModal';
//workcard
const ProjCard = (props)=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        // work-container
        <div className="project-card"> 
                    <img src = {props.imgsrc} alt= "image"/>
                    <h2 className="project-title">{props.title}</h2>
                    <div className="pro-details">
                        <p>{props.text}</p>
                        <div className="pro-btns">
                            <NavLink to={props.view} className="btn" >View on github</NavLink>
                            {props.site !== " " ? <NavLink to={props.site} className="btn" >Visit site</NavLink> : (props.site == "video" && <Button onClick={handleOpen}>Watch demo</Button>)}
                           {/* maybe change to more details/ published site */}
                            {/* <NavLink to="url.com" className="btn" >Source</NavLink> */}
                            <BasicModal open={open} handleClose={handleClose}/>
                        </div>
                    </div>
        </div>
    )
}
export default ProjCard; 