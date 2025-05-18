import "./FooterStyles.css"
import React from "react";
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { SiMinutemailer } from "react-icons/si"

const Footer = () => {
    const footerInfo = `In my free time, I enjoy building everything from seamless, visually captivating web solutions to time saving automation scripts. 
    From the intricate backend workings to the front-end aesthetics, I thrive on the challenge of creating impactful digital experiences. And yes, every coding session is accompanied by a soundtrack—I believe music fuels creativity and innovation. 
    `
    function handleEmail(e) {
        e.preventDefault()
        window.location.href = 'mailto:favela.nicoleerin@gmail.com'
    }
    return (
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
                  
                    {/* for email */}
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            favela.nicoleerin@gmail.com
                            <SiMinutemailer size={20} onClick={handleEmail} />
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>
                        About
                    </h4>
                    <p>{footerInfo}</p>
                    <div className="social">
                        <a href="http://linkedin.com/in/nicole-favela-18aa81207">
                            <FaLinkedin
                                size={30}
                                style={{ color: "#fff", marginRight: "1rem" }}

                            />
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;