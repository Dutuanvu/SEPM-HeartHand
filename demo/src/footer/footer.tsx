import React from "react";
import './footer.css';


const Footer=()=>{
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>For Business</h4>
                        <a href="/employeer">
                            <p>Employeer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Healthplan</p>
                        </a>
                        <a href="/Individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/Iresource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Partners</h4>
                        <a href="/employeer">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Coming soon on`</h4>
                        <div className="socialmedia">
                            <p><img src="https://t.ly/_V-5f" alt="facebook"/></p>
                            <p><img src="https://t.ly/VGhpi" alt="twitter"/></p>
                            <p><img src="https://t.ly/_hGw4" alt="linkedIn"/></p>
                            <p><img src="http://surl.li/sjpdg" alt="instagram"/></p>
                        </div>
                    </div>
                </div>

        <hr></hr>

        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} CodeInn.All right reserved. 
                </p>
            </div>
        </div>

            </div>
        </div>
    )
}

export default Footer
