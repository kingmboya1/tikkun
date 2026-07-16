import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {

    return (
        <>

            <footer style={{backgroundColor: "black"}} className="main-footer">
                <div className="auto-container">

                    <div className="widgets-section">
                        <div className="row clearfix">


                            <div className="column col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                        <div className="footer-logo">
                                            <Link to="/"><img src={`${process.env.PUBLIC_URL}/assets/images/sticky-logo.png`} alt="" /></Link>
                                        </div>
                                        <div className="text">
                                            <p> <strong>Tikkun Africa </strong> Foundation is dedicated to bringing hope to communities, environmental, governance and human rights systems by offering sustainable solutions for growth, restoration, and positive transformation at a global scale.</p>

                                        </div>
                                        <ul className="social-links clearfix">
                                            <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                            <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                            <li><a href="#"><span className="fab fa-vimeo-v"></span></a></li>
                                            <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="column col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
                                    <div className="widget-content">
                                        <h3>Pillars</h3>
                                        <ul>

                                            <li><a href={"/transform"} style={{fontSize: "14px"}}>Transformative Education and Empowerment </a></li>
                                            <li><a href={"/climate"} style={{fontSize: "14px"}}>Climate Action & renewable Energy</a></li>
                                            <li><a href={"/organization"} style={{fontSize: "14px"}}>Organization Capacity Building</a></li>
                                            <li><a href={"/networking"} style={{fontSize: "14px"}}>Networking & Partnerships</a></li>

                                            <li><a href={"/partners"} style={{fontSize: "14px"}}>Partners</a></li>
                                            <li><a href={"/donate"} style={{fontSize: "14px"}}>Donate</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="column col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget info-widget">
                                    <div className="widget-content">
                                        <h3>Contacts</h3>
                                        <ul className="contact-info">
                                            <li>Milimani, Kitengela, Kajiado, Kenya.</li>
                                            <li><a href="tel:+254722717907">+254722 717907</a></li>
                                            <li><a href="mailto:talkus@tikkunafricafoundation.org">talkus@tikkunafricafoundation.org</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="column col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget news-widget">
                                    <div className="widget-content">
                                        <h3>Top Projects</h3>

                                        <div className="news-post">
                                            <div className="post-thumb"><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/climate.jpg`} alt="" /></a></div>
                                            <h5><a href="#">Ongata Greening Initiative</a></h5>
                                            <div className="date">July 25, 2024</div>
                                        </div>

                                        <div className="news-post">
                                            <div className="post-thumb"><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/thumb_1.jpg`} alt="" /></a></div>
                                            <h5><a href="#">Mombasa Farm Kits</a></h5>
                                            <div className="date">July 25, 2024</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="nav-box clearfix">
                            <div className="inner clearfix">
                                <ul className="footer-nav clearfix">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Causes</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>

                                <div className="donate-link"><Link to="/donate" className="theme-btn btn-style-one" data-editable="donate-button"><span className="btn-title">Donate Now</span></Link></div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="footer-bottom">
                    <div className="auto-container">


                        <div className="clearfix">
                            <div className="copyright">Tikkun Africa Foundation  &copy;  2025 All Right Reserved. </div>
                            <ul className="bottom-links">
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    )

}

export default Footer