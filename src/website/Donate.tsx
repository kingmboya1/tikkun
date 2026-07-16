import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Headers from '../layouts/Headers';
import Footer from '../layouts/Footer';
import './Donate.css';

const Donate: React.FC = () => {
    const [donationAmount, setDonationAmount] = useState<string>('');
    const [customAmount, setCustomAmount] = useState<string>('');
    const [donorName, setDonorName] = useState<string>('');
    const [donorEmail, setDonorEmail] = useState<string>('');
    const [donorMessage, setDonorMessage] = useState<string>('');

    const predefinedAmounts = ['10', '25', '50', '100', '250', '500'];

    const handleAmountSelect = (amount: string) => {
        setDonationAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(e.target.value);
        setDonationAmount('');
    };

    const getFinalAmount = () => {
        return customAmount || donationAmount;
    };

    const handlePayPalDonation = () => {
        const amount = getFinalAmount();
        if (!amount || parseFloat(amount) <= 0) {
            alert('Please enter a valid donation amount');
            return;
        }

        // PayPal donation button configuration
        const paypalConfig = {
            amount: amount,
            currency: 'USD',
            business: 'your-paypal-email@example.com', // Replace with your PayPal email
            item_name: 'Tikkun Africa Foundation Donation',
            return: window.location.origin + '/donate/success',
            cancel_return: window.location.origin + '/donate',
            notify_url: window.location.origin + '/donate/ipn', // PayPal IPN URL
            custom: JSON.stringify({
                donor_name: donorName,
                donor_email: donorEmail,
                donor_message: donorMessage
            })
        };

        // Create PayPal form and submit
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://www.paypal.com/cgi-bin/webscr';

        Object.entries(paypalConfig).forEach(([key, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    };

    return (
        <>
            <Headers />
            <div className="donate-page">
                {/* Hero Section */}
                <section className="hero-section text-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold mb-4">Make a Difference Today</h1>
                            <p className="lead mb-4">
                                Your donation helps us continue our mission of transformative education, 
                                climate action, and community empowerment across Africa.
                            </p>
                            <div className="d-flex align-items-center mb-4">
                                <div className="me-4">
                                    <h3 className="mb-0 text-warning">$50K+</h3>
                                    <small>Raised This Year</small>
                                </div>
                                <div className="me-4">
                                    <h3 className="mb-0 text-warning">1,200+</h3>
                                    <small>Lives Impacted</small>
                                </div>
                                <div>
                                    <h3 className="mb-0 text-warning">15+</h3>
                                    <small>Communities Served</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/donate-hero.jpg`} 
                                alt="Donation Impact" 
                                className="img-fluid rounded shadow"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://via.placeholder.com/600x400/007bff/ffffff?text=Make+a+Difference';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Form Section */}
            <section className="donation-form-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card shadow-lg border-0">
                                <div className="card-header bg-primary text-white text-center py-4">
                                    <h2 className="mb-0">Donate Now</h2>
                                    <p className="mb-0 mt-2">Every contribution makes a real impact</p>
                                </div>
                                <div className="card-body p-5">
                                    {/* Amount Selection */}
                                    <div className="mb-4">
                                        <label className="form-label fw-bold">Select Donation Amount</label>
                                        <div className="row g-3">
                                            {predefinedAmounts.map((amount) => (
                                                <div key={amount} className="col-6 col-md-4">
                                                    <button
                                                        type="button"
                                                        className={`btn w-100 ${donationAmount === amount ? 'btn-primary' : 'btn-outline-primary'}`}
                                                        onClick={() => handleAmountSelect(amount)}
                                                    >
                                                        ${amount}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Custom Amount */}
                                    <div className="mb-4">
                                        <label className="form-label fw-bold">Or Enter Custom Amount</label>
                                        <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter amount"
                                                value={customAmount}
                                                onChange={handleCustomAmountChange}
                                                min="1"
                                                step="0.01"
                                            />
                                        </div>
                                    </div>

                                    {/* Donor Information */}
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">Your Name (Optional)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your name"
                                                value={donorName}
                                                onChange={(e) => setDonorName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">Email Address (Optional)</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                value={donorEmail}
                                                onChange={(e) => setDonorEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="mb-4">
                                        <label className="form-label fw-bold">Message (Optional)</label>
                                        <textarea
                                            className="form-control"
                                            rows={3}
                                            placeholder="Share why you're donating or leave a message..."
                                            value={donorMessage}
                                            onChange={(e) => setDonorMessage(e.target.value)}
                                        />
                                    </div>

                                    {/* Selected Amount Display */}
                                    {getFinalAmount() && (
                                        <div className="alert alert-info text-center mb-4">
                                            <h4 className="mb-0">Donation Amount: ${getFinalAmount()}</h4>
                                        </div>
                                    )}

                                    {/* PayPal Donation Button */}
                                    <div className="text-center">
                                        <button
                                            className="btn btn-success btn-lg px-5 py-3 fw-bold"
                                            onClick={handlePayPalDonation}
                                            disabled={!getFinalAmount() || parseFloat(getFinalAmount()) <= 0}
                                        >
                                            <i className="fab fa-paypal me-2"></i>
                                            Donate with PayPal
                                        </button>
                                    </div>

                                    {/* Security Notice */}
                                    <div className="text-center mt-4">
                                        <small className="text-muted">
                                            <i className="fas fa-lock me-1"></i>
                                            Your donation is secure and encrypted. We use PayPal for safe payment processing.
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="impact-section py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">Your Impact</h2>
                        <p className="lead">See how your donations are making a difference</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                        <i className="fas fa-graduation-cap fa-2x"></i>
                                    </div>
                                    <h4 className="card-title">Education</h4>
                                    <p className="card-text">Supporting transformative education programs that empower communities with knowledge and skills.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                        <i className="fas fa-leaf fa-2x"></i>
                                    </div>
                                    <h4 className="card-title">Climate Action</h4>
                                    <p className="card-text">Implementing renewable energy solutions and environmental conservation initiatives.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                        <i className="fas fa-hands-helping fa-2x"></i>
                                    </div>
                                    <h4 className="card-title">Community Building</h4>
                                    <p className="card-text">Strengthening local organizations and fostering partnerships for sustainable development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">What Our Supporters Say</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-4">
                                                                <div className="d-flex align-items-center mb-3">
                                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                                    <i className="fas fa-user"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0">Sarah Johnson</h6>
                                    <small className="text-muted">Monthly Donor</small>
                                </div>
                            </div>
                                    <p className="card-text">"I've been donating monthly for over a year now, and I can see the real impact my contributions are making. The transparency and regular updates keep me connected to the cause."</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-4">
                                                                <div className="d-flex align-items-center mb-3">
                                <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                                    <i className="fas fa-user"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0">Michael Chen</h6>
                                    <small className="text-muted">One-time Donor</small>
                                </div>
                            </div>
                                    <p className="card-text">"The work Tikkun Africa Foundation is doing is incredible. I donated after learning about their climate action initiatives, and I'm proud to support such meaningful work."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-5 text-white">
                <div className="container text-center">
                    <h2 className="display-5 fw-bold mb-4">Ready to Make a Difference?</h2>
                    <p className="lead mb-4">Join thousands of supporters who are helping us create positive change across Africa.</p>
                    <Link to="/donate" className="btn btn-light btn-lg px-5 py-3 fw-bold">
                        Donate Now
                    </Link>
                </div>
            </section>
            </div>
            <Footer />
        </>
    );
};

export default Donate;