import "./FooterStyles.css"
import React from "react";
import {FaHome, FaLinkedin, FaMailBulk,FaPhone, FaLinkedinIn} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {SiMinutemailer} from "react-icons/si"

const Footer=()=>{
    function handleEmail(e){
        e.preventDefault()
        window.location.href = 'mailto:favela.nicoleerin@gmail.com'
    }
    return(
        <div className="footer">
            <div className="footer-container">
                {/* for left side of footer containing contact info */}
                <div className="left">
                    {/* <div className="location">
                        <FaHome size = {20} style = {{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>123 Dreary lane</p>
                            <p>EP, TX</p>
                           
                        </div>
                    </div> */}
                    <div className="phone">
                        <h4>
                        <FaPhone size = {20} style = {{color: "#fff", marginRight: "2rem"}}/>
                        915-497-3173
                        </h4>
                    </div>
                    {/* for email */}
                    <div className="email">
                        <h4>
                        <FaMailBulk size = {20} style = {{color: "#fff", marginRight: "2rem"}}/>
                            favela.nicoleerin@gmail.com
                          <SiMinutemailer size = {20} onClick={handleEmail}/>
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>
                        About
                    </h4>
                    <p>I'm the first in my family to get a STEM degree. I love solving problems and improving lives through technology. I'm an aspiring software engineer with an interest in artificial intelligence</p>
                    <div className="social">
                        <a href="http://linkedin.com/in/nicole-favela-18aa81207">
                        <FaLinkedin
                            size={30}
                            style={{color: "#fff", marginRight:"1rem"}}
                        
                        />
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;