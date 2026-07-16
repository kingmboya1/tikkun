import React, { useEffect } from "react";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";
import Headers from "../layouts/Headers";
import Facts from "../layouts/Facts";
import Pillars from "../layouts/Pillars";
import Action from "../layouts/Action";
import { Link } from "react-router-dom";
import What from "../layouts/What";
const About: React.FC = () => {


    useEffect(() => {
        document.title = "About Us - Tikkun Africa Foundation"
    }, [])

    return (

        <div className={"page-wrapper"}>

            <Headers />
            <Search />

            <section className="page-banner">
                <div className="image-layer" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/about.jpg)` }}></div>
                <div className="bottom-rotten-curve alternate"></div>

                <div className="auto-container">
                    <h1>About Us</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index-2.html">Home</a></li>
                        <li className="active">About Us</li>
                    </ul>
                </div>

            </section>

            <section className="about-section style-two alternate">
                <div className="circle-one"></div>
                <div className="circle-two"></div>
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="left-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="sec-title">
                                    <div className="sub-title">About Us</div>
                                    <h2>Transforming, empowering Women & Youth</h2>
                                    <div className="text">
                                        We empower Women and Youth to advance in confidence, build resilience in developing the communities on sustainable practices in accordance to GRI.

                                        <br />

                                        We aim to transform Women and Youth to self-reliance and creating sustainable opportunities and programs to support their Social, Environmental, Economic, Governance and human rights in Africa.
                                    </div>
                                    <div className="link-box clearfix"><a href="/transformation"
                                        className="theme-btn btn-style-one"><span
                                            className="btn-title">Read More</span></a></div>
                                </div>
                            </div>
                        </div>

                        <div className="right-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="images clearfix">
                                    <figure className="image wow fadeInRight" data-wow-delay="0ms"><img loading={"lazy"} style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                        src={`${process.env.PUBLIC_URL}/assets/images/34.png`} alt="" /></figure>




                                    <figure className="image wow fadeInRight" data-wow-delay="300ms"><img loading={"lazy"} style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                        src={`${process.env.PUBLIC_URL}/assets/images/resource/featured-image-19.jpg`} alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-blocks">
                        <div className="row clearfix">

                            <div className="default-text-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner">
                                    <h3>Our Mission</h3>
                                    <div className="text">Transform Women and Youth to self-reliance and creating sustainable opportunities and programs to support their Social, Environmental, Economic, Governance and human rights in Africa.
                                    </div>
                                </div>
                            </div>

                            <div className="default-text-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner">
                                    <h3>Our Vision</h3>
                                    <div className="text">
                                        Empower Women and Youth to advance in confidence, build resilience in developing the communities on sustainable practices in accordance to GRI.
                                    </div>
                                </div>
                            </div>

                            <div className="default-text-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner">
                                    <h3>Our Values</h3>
                                    <div className="text">

                                        Integrity

                                    </div>
                                    <div className={"text"}>
                                        Excellence
                                    </div>

                                    <div className={"text"}>
                                        Honesty
                                    </div>
                                    <div className={"text"}>
                                        Community Centric Accountability
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Facts />

            <Pillars />


            <What />

            <section className="causes-section">
                <div className="auto-container">

                    <div className="sec-title centered">

                        <h2>Our Story</h2>
                        <div className="text">How Tikkun Africa Foundation came to be!</div>
                    </div>

                    <div className="row clearfix">


                        <div className="cause-block col-lg-12 col-md-12 col-sm-12">
                            <div className={"text"}>

                                <strong>Tikkun Africa </strong> was founded in 2015 as a grassroot initiative driven by a passion for empowering youth, young women, and teenage mothers. The foundation's origins are deeply rooted in the impact and inspiration of a dedicated entrepreneur and mentor (Mama Sophie, a household name by her peers) who devoted her time to supporting and uplifting young individuals. With a strong commitment to fostering self-reliance, she provided mentorship, access to quality education, and vocational training opportunities.
                                <br /> <br />

                                Through her efforts, young girls and women were equipped with essential skills, enabling them to secure sustainable livelihoods. Many were trained in dressmaking and tailoring at the Soweto Dressmaking and Embroidery School (Mombasa, Kenya) while others gained skills in tie-dyeing and entrepreneurship. Teenage mothers were encouraged to return to school, she monitored them closed even their performance. This was done through collaborative efforts involving local leaders, church elders, and school administrators to facilitate their reintegration into formal education.
                                <br /> <br />

                                Building upon these strong foundations by my Mother, <strong> Tikkun Africa </strong> continued to expand its impact. Through extensive training in various fields in Human, Business Management, in depth courses using Credit Union models, leadership, and sustainable development, the organization's efforts gained international recognition. In 2020, the <strong> World Council of Credit Unions (WOCCU) </strong> in Glasgow, UK, awarded an  <strong>International Credit Union Development Educator (I-CUDE)</strong> designation—a prestigious honor that highlighted the foundation’s contributions to social and economic development.
                                <br /> <br />

                                <strong>Tikkun Africa Foundation </strong> is dedicated to bringing hope to communities, environmental, governance and human rights systems by offering sustainable solutions for growth, restoration, and positive transformation at a global scale.
                            </div>

                            <img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/candle.jpg`} alt={""} style={{ maxHeight: "500px" }} />
                        </div>



                    </div>

                </div>
            </section>

            <Action />

            <Footer />

        </div>

    )

}

export default About