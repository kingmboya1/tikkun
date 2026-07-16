import React from "react";

const Facts: React.FC = () => {

    return (


            <section className="facts-section">
                <div className="auto-container">
                    <div className="inner-container">


                        <div className="fact-counter">
                            <div className="row clearfix">


                                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                    <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="content">
                                            <div className="count-outer count-box">
                                                <span className="count-text" style={{color: "#3CC88F"}} data-speed="3000" data-stop="90">10+</span>
                                            </div>
                                            <div className="counter-title">Project Complete</div>
                                        </div>
                                    </div>
                                </div>


                                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                    <div className="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="content">
                                            <div className="count-outer count-box alternate">
                                                <span className="count-text" data-speed="3000" style={{color: "#3CC88F"}} data-stop="216">10+</span>
                                            </div>
                                            <div className="counter-title">Women Impacted</div>
                                        </div>
                                    </div>
                                </div>


                                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                    <div className="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="content">
                                            <div className="count-outer count-box">
                                                <span className="count-text" data-speed="2000" style={{color: "#3CC88F"}} data-stop="35">10+</span>
                                            </div>
                                            <div className="counter-title">Households Impacted</div>
                                        </div>
                                    </div>
                                </div>


                                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                    <div className="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                        <div className="content">
                                            <div className="count-outer count-box">
                                                <span className="count-text" data-speed="2000" style={{color: "#3CC88F"}} data-stop="15">50+</span>
                                            </div>
                                            <div className="counter-title">Volunteers Involved</div>
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

export default Facts