import React, {useEffect, useState} from 'react'
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";


const Events: React.FC = () => {

    const [step, setStep] = useState<number>(0)
    const [title, setTitle] = useState<any>("Our Events")


    return(
        <>
            <Headers/>
            <Search/>

            <section className="page-banner">
                <div className="image-layer" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/background/bg-banner-1.jpg)`}}></div>
                <div className="bottom-rotten-curve"></div>

                <div className="auto-container">
                    <h1>Our Events</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="/">Home</a></li>
                        <li className="active">{title}</li>
                    </ul>
                </div>

            </section>

            {step === 0 && (
                <section className="events-section">
                    <div className="auto-container">

                        <div className="row clearfix">


                            <div className="event-block-three col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-delay="0ms">
                                    <div className="image-box">
                                        <figure className="image"><a href="#"><img
                                            src={`${process.env.PUBLIC_URL}/assets/images/labor.jpg`} alt=""/></a></figure>

                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="#">Plant a tree <br/> This Labor day!</a></h3>
                                        <ul className="info clearfix">
                                            <li><span className="icon far fa-clock"></span> 10.00 AM - 12.00 PM</li>
                                            <li><span className="icon fa fa-map-marker-alt"></span> Ongata Rongai Primary School</li>
                                            <li><span className="icon fa fa-map-marker-alt"></span> Nkaimurunya Chief's Camp</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="event-block-three col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-delay="0ms">
                                    <div className="image-box">
                                        <figure className="image"><a href="#"><img
                                            src={`${process.env.PUBLIC_URL}/assets/images/June.jpg`} alt=""/></a></figure>

                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="#">Cleanup Exercise!</a></h3>
                                        <ul className="info clearfix">
                                            <li><span className="icon far fa-clock"></span> 9.00 AM - 12.00 PM</li>
                                            <li><span className="icon fa fa-map-marker-alt"></span> Mayor Road, Ongata Rongai</li>
                                            <li><span className="icon fa fa-map-marker-alt"></span> Nkaimurunya Chief's Camp</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="event-block-three col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="image-box">
                                        <figure className="image"><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/donate-sanitary-towels-2026.jpg`} alt="Donate Sanitary Towels - Empower Girls in Kinango Sub County" /></a></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="#">Donate Sanitary Towels: Empower Girls in Kinango</a></h3>
                                        <ul className="info clearfix">
                                            <li><span className="icon far fa-calendar-alt"></span>11th &amp; 18th July 2026</li>
                                            <li><span className="icon fa fa-map-marker-alt"></span>Kinango Sub County, Kwale County</li>
                                            <li><span className="icon fa fa-users"></span>Target: 1,000 Girls</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>

            )}

            {step === 1 && (
                <>

                </>
            )}



            <Footer/>
        </>
    )

}

export default Events