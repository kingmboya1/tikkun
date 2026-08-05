import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";
import Facts from "../layouts/Facts";
import Pillars from "../layouts/Pillars";
import What from "../layouts/What";
import '../styles/grid-utils.css';



const Home: React.FC = () => {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const currentDate = new Date();
        const deadline = new Date('2025-06-04');

        if (currentDate < deadline) {
            setShowModal(true);
        }
    }, []);

    const handleImageClick = () => {
        setShowModal(false);
        navigate('/events');
    };

    const handleClose = () => {
        setShowModal(false);
        sessionStorage.setItem('juneModalDismissed', 'true');
    };

    return (

        <div className={"page-wrapper"}>

            <Headers />
            <Search />

            <section className="banner-section">

                <img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/landing.jpg`} style={{ width: "100%", height: "75%" }} alt={""} />
            </section>

            <Pillars />

            <section>


            </section>

            <What />

            <section style={{
                padding: '100px 0',
                background: 'linear-gradient(180deg, #fff 0%, #f8f9fa 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Decorative circles */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '-100px',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    border: '30px solid rgba(34, 139, 34, 0.05)',
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-100px',
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    border: '25px solid rgba(34, 139, 34, 0.05)',
                }}></div>

                <div className="auto-container">
                    {/* Mission */}
                    <div className="grid-2" style={{
                        gap: '60px',
                        alignItems: 'center',
                        marginBottom: '80px',
                    }}>
                        <div>
                            <span style={{
                                display: 'inline-block',
                                padding: '8px 20px',
                                backgroundColor: 'rgba(34, 139, 34, 0.1)',
                                color: '#228B22',
                                borderRadius: '25px',
                                fontSize: '14px',
                                fontWeight: 600,
                                marginBottom: '15px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                            }}>
                                Our Purpose
                            </span>
                            <h2 style={{
                                fontSize: '42px',
                                fontWeight: 700,
                                color: '#1a1a1a',
                                marginBottom: '20px',
                                lineHeight: 1.2,
                            }}>
                                Our Mission
                            </h2>
                            <p style={{
                                fontSize: '17px',
                                color: '#555',
                                lineHeight: 1.8,
                                marginBottom: '25px',
                            }}>
                                Transform Women and Youth to self-reliance and creating sustainable opportunities and programs to support their Social, Environmental, Economic, Governance and human rights in Africa.
                            </p>
                            <a href="/pillars" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '14px 30px',
                                backgroundColor: '#228B22',
                                color: '#fff',
                                borderRadius: '30px',
                                textDecoration: 'none',
                                fontWeight: 600,
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(34, 139, 34, 0.3)',
                            }}>
                                Read More →
                            </a>
                        </div>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <a
                                href={`${process.env.PUBLIC_URL}/assets/images/a_1.jpg`}
                                data-fancybox="mission"
                                style={{ width: '50%' }}
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/a_1.jpg`}
                                    alt="Mission"
                                    style={{
                                        width: '100%',
                                        height: '380px',
                                        objectFit: 'cover',
                                        borderRadius: '20px',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </a>
                            <a
                                href={`${process.env.PUBLIC_URL}/assets/images/farm_kit.jpg`}
                                data-fancybox="mission"
                                style={{ width: '50%' }}
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/farm_kit.jpg`}
                                    alt="Mission"
                                    style={{
                                        width: '100%',
                                        height: '380px',
                                        objectFit: 'cover',
                                        borderRadius: '20px',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="grid-2" style={{
                        gap: '60px',
                        alignItems: 'center',
                    }}>
                        <div>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/mission.jpg`}
                                alt="Vision"
                                style={{
                                    width: '100%',
                                    height: '380px',
                                    objectFit: 'cover',
                                    borderRadius: '20px',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                                }}
                            />
                        </div>
                        <div>
                            <span style={{
                                display: 'inline-block',
                                padding: '8px 20px',
                                backgroundColor: 'rgba(240, 204, 0, 0.18)',
                                color: '#7A6000',
                                borderRadius: '25px',
                                fontSize: '14px',
                                fontWeight: 600,
                                marginBottom: '15px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                            }}>
                                Our Dream
                            </span>
                            <h2 style={{
                                fontSize: '42px',
                                fontWeight: 700,
                                color: '#1a1a1a',
                                marginBottom: '20px',
                                lineHeight: 1.2,
                            }}>
                                Our Vision
                            </h2>
                            <p style={{
                                fontSize: '17px',
                                color: '#555',
                                lineHeight: 1.8,
                                marginBottom: '25px',
                            }}>
                                Empower Women and Youth to advance in confidence, build resilience in developing the communities on sustainable practices in accordance to GRI.
                            </p>
                            <a href="/pillars" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '14px 30px',
                                backgroundColor: '#F0CC00',
                                color: '#1a1a1a',
                                borderRadius: '30px',
                                textDecoration: 'none',
                                fontWeight: 600,
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(240, 204, 0, 0.4)',
                            }}>
                                Read More →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {showModal && (
                <div
                    className="modal show fade"
                    tabIndex={-1}
                    style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.6)' }}
                    onClick={handleClose}
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-content border-0 bg-transparent position-relative">
                            {/* Stylish close button */}
                            <button
                                onClick={handleClose}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '15px',
                                    fontSize: '1.5rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    zIndex: 9999,
                                }}
                            >
                                &times;
                            </button>

                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/June.jpg`}
                                alt="June Event"
                                onClick={handleImageClick}
                                style={{ cursor: 'pointer', width: '100%', borderRadius: '0.5rem' }}
                            />
                        </div>
                    </div>
                </div>
            )}

            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Decorative element */}
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '150px',
                    background: 'linear-gradient(180deg, transparent, rgba(34, 139, 34, 0.3), transparent)',
                    transform: 'skewX(-15deg) translateX(-50px)',
                }}></div>

                <div className="auto-container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <h2 style={{
                        fontSize: '48px',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '15px',
                    }}>
                        How Can You Help?
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: 'rgba(255,255,255,0.8)',
                        marginBottom: '35px',
                        maxWidth: '600px',
                        margin: '0 auto 35px',
                    }}>
                        Your donation will go a long way to help us achieve our goals for our 4 pillars.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a href="/donate" style={{
                            padding: '16px 40px',
                            backgroundColor: '#228B22',
                            color: '#fff',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '16px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 20px rgba(34, 139, 34, 0.5)',
                        }}>
                            💚 Donate Now
                        </a>
                        <a href="#" style={{
                            padding: '16px 40px',
                            backgroundColor: '#F0CC00',
                            color: '#1a1a1a',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '16px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 20px rgba(240, 204, 0, 0.5)',
                        }}>
                            🤝 Volunteer Now
                        </a>
                    </div>
                </div>
            </section>


            <Facts />

            <br />

            <section className={"insta-gallery"}>
                <div className={"insta-gallery-carousel owl-carousel owl-theme"}>

                    <div className={"gallery-item"}>
                        <div className={"image-box"}>
                            <figure className="image"><img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/various/1.jpg`} alt="" /></figure>
                            <div className="overlay-box"><a href={`${process.env.PUBLIC_URL}/assets/images/various/1.jpg`} className="lightbox-image" data-fancybox="gallery"><span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>


                    <div className="gallery-item">
                        <div className="image-box">
                            <figure className="image"><img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/various/2.jpg`} alt="" /></figure>
                            <div className="overlay-box"><a href={`${process.env.PUBLIC_URL}/assets/images/various/2.jpg`} className="lightbox-image" data-fancybox="gallery">
                                <span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>


                    <div className="gallery-item">
                        <div className="image-box">
                            <figure className="image"><img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/various/3.jpg`} alt="" /></figure>
                            <div className="overlay-box"><a href={`${process.env.PUBLIC_URL}/assets/images/various/3.jpg`} className="lightbox-image" data-fancybox="gallery"><span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>


                    <div className="gallery-item">
                        <div className="image-box">
                            <figure className="image"><img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/various/16.jpg`} alt="" /></figure>
                            <div className="overlay-box"><a href={`${process.env.PUBLIC_URL}/assets/images/various/16.jpg`} className="lightbox-image" data-fancybox="gallery"><span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>


                    <div className="gallery-item">
                        <div className="image-box">
                            <figure className="image"><img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/various/7.jpg`} alt="" /></figure>
                            <div className="overlay-box"><a href={`${process.env.PUBLIC_URL}/assets/images/various/7.jpg`} className="lightbox-image" data-fancybox="gallery"><span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>


                    <div className="gallery-item">
                        <div className="image-box">
                            <figure className="image"><img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/various/9.jpg`} alt="" /></figure>
                            <div className="overlay-box"><a href={`${process.env.PUBLIC_URL}/assets/images/various/9.jpg`} className="lightbox-image" data-fancybox="gallery"><span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>


                    <div className="gallery-item">
                        <div className="image-box">
                            <figure className="image"><img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/various/10.jpg`} alt="" /></figure>
                            <div className="overlay-box"><a href={`${process.env.PUBLIC_URL}/assets/images/various/10.jpg`} className="lightbox-image" data-fancybox="gallery"><span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>


                    <div className="gallery-item">
                        <div className="image-box">
                            <figure className="image"><img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/various/15.jpg`} alt="" /></figure>
                            <div className="overlay-box"><a href={`${process.env.PUBLIC_URL}/assets/images/various/15.jpg`} className="lightbox-image" data-fancybox="gallery"><span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>


                    <div className="gallery-item">
                        <div className="image-box">
                            <figure className="image"><img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/various/6.jpg`} alt="" /></figure>
                            <div className="overlay-box"><a href={`${process.env.PUBLIC_URL}/assets/images/various/6.jpg`} className="lightbox-image" data-fancybox="gallery"><span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>


                    <div className="gallery-item">
                        <div className="image-box">
                            <figure className="image"><img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/various/17.jpg`} alt="" /></figure>
                            <div className="overlay-box"><a href={`${process.env.PUBLIC_URL}/assets/images/various/17.jpg`} className="lightbox-image" data-fancybox="gallery"><span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>


                    <div className="gallery-item">
                        <div className="image-box">
                            <figure className="image"><img loading={"lazy"} src={`${process.env.PUBLIC_URL}/assets/images/various/18.jpg`} alt="" /></figure>
                            <div className="overlay-box"><a href={`${process.env.PUBLIC_URL}/assets/images/various/18.jpg`} className="lightbox-image" data-fancybox="gallery"><span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>


                    <div className="gallery-item">
                        <div className="image-box">
                            <figure className="image"><img loading={"lazy"} src="images/various/6.jpg" alt="" /></figure>
                            <div className="overlay-box"><a href="images/various/6.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon flaticon-instagram"></span></a></div>
                        </div>
                    </div>

                </div>
            </section>

            <section style={{
                padding: '100px 0',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                position: 'relative',
            }}>
                {/* Decorative circles */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '-80px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    border: '20px solid rgba(34, 139, 34, 0.05)',
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '-60px',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    border: '15px solid rgba(34, 139, 34, 0.05)',
                }}></div>

                <div className="auto-container">
                    <div className="grid-2" style={{
                        gap: '60px',
                        alignItems: 'center',
                    }}>
                        {/* Left Column - Text */}
                        <div>
                            <span style={{
                                display: 'inline-block',
                                padding: '8px 20px',
                                backgroundColor: 'rgba(34, 139, 34, 0.1)',
                                color: '#228B22',
                                borderRadius: '25px',
                                fontSize: '14px',
                                fontWeight: 600,
                                marginBottom: '15px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                            }}>
                                About Us
                            </span>
                            <h2 style={{
                                fontSize: '42px',
                                fontWeight: 700,
                                color: '#1a1a1a',
                                marginBottom: '20px',
                                lineHeight: 1.2,
                            }}>
                                You Can Help Support Our Activities
                            </h2>
                            <p style={{
                                fontSize: '17px',
                                color: '#555',
                                lineHeight: 1.8,
                                marginBottom: '30px',
                            }}>
                                We aim to transform Women and Youth to self-reliance and creating sustainable opportunities and programs to support their Social, Environmental, Economic, Governance and human rights in Africa.
                            </p>
                            <a href="/pillars" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '14px 30px',
                                backgroundColor: '#228B22',
                                color: '#fff',
                                borderRadius: '30px',
                                textDecoration: 'none',
                                fontWeight: 600,
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(34, 139, 34, 0.3)',
                            }}>
                                Our Pillars →
                            </a>
                        </div>

                        {/* Right Column - Feature Cards */}
                        <div className="grid-2" style={{
                            gap: '20px',
                        }}>
                            {[
                                { icon: '👤', title: 'Become Volunteer', link: '#' },
                                { icon: '❤️', title: 'Quick Fundraise', link: '#' },
                                { icon: '💵', title: 'Give Donation', link: '/donate' },
                                { icon: '🤝', title: 'Partner With Us', link: '#' },
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '35px 20px',
                                        backgroundColor: '#fff',
                                        borderRadius: '20px',
                                        textDecoration: 'none',
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
                                    }}
                                >
                                    <span style={{
                                        fontSize: '40px',
                                        marginBottom: '15px',
                                    }}>
                                        {item.icon}
                                    </span>
                                    <h4 style={{
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: '#1a1a1a',
                                        textAlign: 'center',
                                    }}>
                                        {item.title}
                                    </h4>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>

    )

}

export default Home


