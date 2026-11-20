import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";
import { events } from '../data/events';


const Events: React.FC = () => {

    useEffect(() => {
        document.title = "Our Events - Tikkun Africa Foundation";
    }, []);

    const [step, setStep] = useState<number>(0)
    const [title, setTitle] = useState<any>("Our Events")

    // Rotating header photos from recent events
    const bannerSlides = [
        `${process.env.PUBLIC_URL}/assets/images/events/breast-cancer-walk-2026-07.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/mgandini-primary-school-2026.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-01.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-06.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/events/breast-cancer-walk-2026-01.jpg`,
    ];
    const [bannerSlide, setBannerSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setBannerSlide(prev => (prev + 1) % bannerSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [bannerSlides.length]);


    return(
        <>
            <Headers/>
            <Search/>

            <section className="page-banner">
                {bannerSlides.map((slide, index) => (
                    <div
                        key={slide}
                        className="image-layer"
                        style={{
                            backgroundImage: `url(${slide})`,
                            opacity: index === bannerSlide ? 1 : 0,
                            transition: 'opacity 1.5s ease-in-out',
                        }}
                    ></div>
                ))}
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
                            {events.map((event) => (
                                <div key={event.id} className="event-block-three col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link to={`/events/${event.id}`}>
                                                    <img src={`${process.env.PUBLIC_URL}/${event.image}`} alt={event.title} />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link to={`/events/${event.id}`}>{event.title}</Link></h3>
                                            <ul className="info clearfix">
                                                <li><span className="icon far fa-calendar-alt"></span> {event.date}</li>
                                                <li><span className="icon fa fa-map-marker-alt"></span> {event.location}</li>
                                                {event.extra && (
                                                    <li><span className="icon fa fa-users"></span> {event.extra}</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
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