

//import cat-typing from "../assets/cat-typing.gif";
import CatImg1 from "../assets/cat-typing.gif"
import "./TmpContactStyles.css"

export default function TmpContact() {
  
  return (
    <div className="contact-me">
        <div className="contact-container">
            <img className="kitty-types" src={CatImg1} alt="kitty" />

            <div className="contact-right">
                  
                    <h3>Send me an email or add me on LinkedIn</h3>
                    <div className="contact-details">
                          <p>My assistant is trying his best and will let me know</p>
                    </div>
                   
                    {/* <div className="contact-me">
                        <a href="http://linkedin.com/in/nicole-favela-18aa81207">
                        <FaLinkedin
                            size={30}
                            style={{color: "#fff", marginRight:"1rem"}}
                        
                        />
                        </a>

                    </div> */}
                </div>
                </div>
    </div>
    )
 
}
