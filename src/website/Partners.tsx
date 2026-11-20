import React, { useEffect } from 'react'
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";

// Partner logo placeholder: initials on a green tile (replace with real logos when available)
const PartnerTile: React.FC<{ name: string; initials: string }> = ({ name, initials }) => {
    return (
        <div
            role="img"
            aria-label={name}
            style={{
                height: '240px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #1e7a1e 0%, #228B22 55%, #c9a227 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '64px',
                fontWeight: 700,
                letterSpacing: '4px',
            }}
        >
            {initials}
        </div>
    );
};

const Partners: React.FC = () => {

    useEffect(() => {
        document.title = "Our Partners - Tikkun Africa Foundation";
    }, []);

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
                                <figure className="image-box"><PartnerTile name="Global Ministry For Christ" initials="GMFC" /></figure>
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
                                <figure className="image-box"><PartnerTile name="Multilink Express Kenya LTD" initials="MEK" /></figure>
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
                                <figure className="image-box"><PartnerTile name="Fresh Alternative Ltd" initials="FA" /></figure>
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
                                <figure className="image-box"><PartnerTile name="Government of Kenya, Office of the Administrative Chief. Ongata Rongai - Kajiado West" initials="GoK" /></figure>
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