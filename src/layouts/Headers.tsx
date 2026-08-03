import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import '../styles/mobile-menu.css'
import '../styles/mobile-header-fix.css'

const Headers: React.FC = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (dropdownName: string) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    return(

        <>
            <header className="main-header" style={{position: 'fixed', top: 0, width: '100%', zIndex: 99901, background: '#fff', boxShadow: '0 0 15px rgba(0,0,0,0.10)'}}>

                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner clearfix">
                            <div className="top-left">
                                <ul className="social-links clearfix">
                                    <li className="social-title">Follow Us:</li>
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                    <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                </ul>
                            </div>

                            <div className="top-right">
                                <ul className="info clearfix">
                                    <li className="search-btn">
                                        <button type="button" className="theme-btn search-toggler"><span
                                            className="fa fa-search"></span></button>
                                    </li>
                                    <li><a href="tel:+254722717907"><span
                                        className="icon fa fa-phone-alt"></span> Call: &nbsp;+254 722 717907</a></li>
                                    <li><a href="mailto:talkus@tikkunafricafoundation.org"><span
                                        className="icon fa fa-envelope"></span> Email: &nbsp;talkus@tikkunafricafoundation.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container clearfix !flex !items-center !justify-between !min-h-0 !p-3 md:!block md:!p-0 md:!min-h-[120px]">

                            <div className="logo-box" style={{backgroundColor: "transparent"}}>
                                <div className="logo"><Link to="/" title="Tikkun Africa Foundation">
                                    <br />
                                    <img className="!h-[46px] md:!h-auto" src={`${process.env.PUBLIC_URL}/assets/images/sticky-logo.png`} alt="Tikkun Africa Foundation" /></Link></div>
                            </div>


                            <div className="nav-outer clearfix">

                                <div className="mobile-nav-toggler !m-0 !p-2" onClick={() => setMobileMenuOpen(true)}><span className="icon flaticon-menu-1"></span></div>


                                <nav className="main-menu navbar-expand-md navbar-light" style={{display: 'block', visibility: 'visible'}}>
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent" style={{display: 'block', visibility: 'visible'}}>
                                        <ul className="navigation clearfix">
                                            <li className="current"><Link to="/">Home</Link></li>

                                            <li className="dropdown"><Link to="/pillars">Pillars</Link>
                                                <ul>
                                                    <li><Link to="/transformation">Transformative Education and Empowerment</Link></li>
                                                    <li><Link to="/climate">Climate Action & Renewable Energy</Link></li>
                                                    <li><Link to="/organization">Organization Capacity Building</Link></li>
                                                    <li><Link to="/networking">Networking & Partnerships</Link></li>
                                                </ul>
                                            </li>

                                            <li><Link to="/events">Events</Link></li>

                                            <li><Link to="/gallery">Gallery</Link></li>

                                            <li className="dropdown"><Link to="/about">About</Link>
                                                <ul>
                                                    <li><Link to="/about">About Us</Link></li>
                                                    <li><Link to="/partners">Our Partners</Link></li>
                                                </ul>
                                            </li>

                                            <li><Link to="/contact">Contact</Link></li>
                                            
                                        </ul>
                                    </div>
                                </nav>

                                

                            </div>
                        </div>
                    </div>
                </div>

            </header>

            {/* Mobile menu rendered via Portal to avoid stacking context issues from header */}
            {createPortal(
                <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <div className="menu-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
                    <div className="close-btn" onClick={() => setMobileMenuOpen(false)}><span className="icon flaticon-cancel"></span></div>

                    <nav className="menu-box">
                        <div className="nav-logo !py-2"><Link to="/"><img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} style={{maxHeight: "60px"}} alt="" title="" /></Link>
                        </div>
                        <div className="menu-outer">
                            <ul className="navigation clearfix !mt-4">
                                <li className="current"><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                                <li className="dropdown"><span onClick={() => toggleDropdown('pillars')} className="!uppercase !text-[15px] !font-medium !text-[#228B22]" style={{cursor: 'pointer', display: 'block', padding: '12px 0'}}>Pillars</span>
                                    <ul style={{display: openDropdown === 'pillars' ? 'block' : 'none'}}>
                                        <li><Link to="/transformation" onClick={() => setMobileMenuOpen(false)}>Transformative Education and Empowerment</Link></li>
                                        <li><Link to="/climate" onClick={() => setMobileMenuOpen(false)}>Climate Action & Renewable Energy</Link></li>
                                        <li><Link to="/organization" onClick={() => setMobileMenuOpen(false)}>Organization Capacity Building</Link></li>
                                        <li><Link to="/networking" onClick={() => setMobileMenuOpen(false)}>Networking & Partnerships</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link></li>
                                <li><Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link></li>
                                <li className="dropdown"><span onClick={() => toggleDropdown('about')} className="!uppercase !text-[15px] !font-medium !text-[#228B22]" style={{cursor: 'pointer', display: 'block', padding: '12px 0'}}>About</span>
                                    <ul style={{display: openDropdown === 'about' ? 'block' : 'none'}}>
                                        <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
                                        <li><Link to="/partners" onClick={() => setMobileMenuOpen(false)}>Our Partners</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                            </ul>
                        </div>

                        <div className="social-links">
                            <ul className="clearfix">
                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>,
                document.body
            )}

        </>

    )

}

export default Headers