import React from 'react'
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";

const Partners: React.FC = () => {

    return(
        <div className={"page-wrapper"}>
            <Headers/>
            <Search/>

            <section className="team-section">
                <div className="bottom-rotten-curve"></div>

                <div className="auto-container">

                    <div className="row clearfix">




                        <div className="team-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms">
                                <figure className="image-box"><a href="#"><img src="images/resource/team-image-1.jpg"
                                                                               alt=""/></a></figure>
                                <div className="lower-box">
                                    <div className="content">
                                        <h3><a href="#">Global Ministry For Christ</a></h3>
                                        <div className="designation">Church</div>
                                        <div className="social-links">
                                            <ul className="clearfix">
                                                <li><a href="https://facebook.com/gmfc_kenya"><span className="fab fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms">
                                <figure className="image-box"><a href="#"><img src="images/resource/team-image-1.jpg"
                                                                               alt=""/></a></figure>
                                <div className="lower-box">
                                    <div className="content">
                                        <h3><a href="#">Multilink Express Kenya LTD</a></h3>
                                        <div className="designation">Private Company</div>
                                        <div className="social-links">
                                            <ul className="clearfix">
                                                <li><a href="https://facebook.com/gmfc_kenya"><span className="fab fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms">
                                <figure className="image-box"><a href="#"><img src="images/resource/team-image-1.jpg"
                                                                               alt=""/></a></figure>
                                <div className="lower-box">
                                    <div className="content">
                                        <h3><a href="#">Fresh Alternative Ltd</a></h3>
                                        <div className="designation">Private Company</div>
                                        <div className="social-links">
                                            <ul className="clearfix">
                                                <li><a href="https://facebook.com/gmfc_kenya"><span className="fab fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms">
                                <figure className="image-box"><a href="#"><img src="images/resource/team-image-1.jpg"
                                                                               alt=""/></a></figure>
                                <div className="lower-box">
                                    <div className="content">
                                        <h3><a href="#">Government of Kenya, Office of the Administrative Chief. Ongata Rongai - Kajiado West</a></h3>
                                        <div className="designation">Government Office</div>
                                        <div className="social-links">
                                            <ul className="clearfix">
                                                <li><a href="https://facebook.com/gmfc_kenya"><span className="fab fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>

            <Footer/>
        </div>
    )


}

export default Partners