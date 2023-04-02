import "./AltImgStyles.css"
//keyboard image from unsplash
import React, {Component} from "react"
class AltImg extends Component{
    render(){
    return(
        <div className="alt-img">
            <div className="heading">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
        </div>
    )
}
}
export default AltImg;