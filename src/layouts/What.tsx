import React from "react";

const What: React.FC = () => {

    return(
        <section className="what-we-do style-two">
            {/* The emblem is logo artwork on a white background, so it can't sit
                in this slot as a cropped, 70%-darkened full-bleed photo - it just
                turns into a grey slab. Use a brand gradient here instead and show
                the emblem at full colour in the column below. */}
            <div className="image-layer" style={{background:'linear-gradient(135deg, #176B17 0%, #0b2f0b 100%)'}}></div>
            <div className="top-rotten-curve"></div>
            <div className="bottom-rotten-curve"></div>

            <div className="auto-container">
                <div className="row clearfix">
                    <div className="title-column col-xl-6 col-lg-12 col-sm-12">
                        <div className="inner">
                            <div className="sec-title">
                                <h2>How we impact the society?</h2>
                                <div className="text">Here's how our 4 pillars directly impact the society.</div>
                            </div>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/dove-emblem.png`}
                                alt="Dove carrying an olive branch over a sunrise and seedling"
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    maxWidth: '380px',
                                    height: 'auto',
                                    marginTop: '30px',
                                    borderRadius: '16px',
                                }}
                            />
                        </div>
                    </div>

                    <div className="content-column col-xl-6 col-lg-12 col-sm-12">
                        <div className="row clearfix">


                            <div className="service-block col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="icon-box"><span className="flaticon-water-bottle"></span></div>
                                    <h3>Environmental Conservation</h3>
                                    <div className="text">Driving environmental protection and clean energy adoption through local engagement and strategic organizational partnerships.
                                    </div>
                                </div>
                            </div>


                            <div className="service-block col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="icon-box"><span className="flaticon-fruit"></span></div>
                                    <h3>Food Security</h3>
                                    <div className="text">Promoting climate-smart farming, renewable energy use, and cooperative networks for long-term food sustainability.
                                    </div>
                                </div>
                            </div>


                            <div className="service-block col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="icon-box"><span className="flaticon-medicine"></span></div>
                                    <h3>Youth & Women Empowerment</h3>
                                    <div className="text">Building confidence, skills, and opportunities for youth and women to transform their lives and communities.
                                    </div>
                                </div>
                            </div>


                            <div className="service-block col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="icon-box"><span className="flaticon-reading"></span></div>
                                    <h3>Community Development</h3>
                                    <div className="text">Empowering local communities to lead sustainable initiatives through training, partnerships, and grassroots capacity building.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default What
