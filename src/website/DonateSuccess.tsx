import React from 'react';
import { Link } from 'react-router-dom';
import Headers from '../layouts/Headers';
import Footer from '../layouts/Footer';
import './Donate.css';

const DonateSuccess: React.FC = () => {
    return (
        <>
            <Headers />
            <div className="donate-page">
                <section className="hero-section text-white py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="mb-4">
                                <i className="fas fa-check-circle fa-5x text-warning"></i>
                            </div>
                            <h1 className="display-4 fw-bold mb-4">Thank You!</h1>
                            <p className="lead mb-4">
                                Your donation has been successfully processed. You will receive a confirmation email shortly.
                            </p>
                            <div className="alert alert-light text-dark">
                                <h5>What happens next?</h5>
                                <ul className="text-start">
                                    <li>You'll receive a receipt from PayPal</li>
                                    <li>We'll send you updates on how your donation is being used</li>
                                    <li>Your contribution will help us continue our mission</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <Link to="/" className="btn btn-light btn-lg me-3">
                                    <i className="fas fa-home me-2"></i>
                                    Return Home
                                </Link>
                                <Link to="/donate" className="btn btn-outline-light btn-lg">
                                    <i className="fas fa-heart me-2"></i>
                                    Donate Again
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="mb-4">Stay Connected</h2>
                            <p className="lead mb-4">
                                Follow us on social media to see the impact of your donation and stay updated on our projects.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <a href="#" className="btn btn-primary">
                                    <i className="fab fa-facebook-f me-2"></i>
                                    Facebook
                                </a>
                                <a href="#" className="btn btn-info">
                                    <i className="fab fa-twitter me-2"></i>
                                    Twitter
                                </a>
                                <a href="#" className="btn btn-danger">
                                    <i className="fab fa-instagram me-2"></i>
                                    Instagram
                                </a>
                                <a href="#" className="btn btn-success">
                                    <i className="fab fa-linkedin-in me-2"></i>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            <Footer />
        </>
    );
};

export default DonateSuccess; 