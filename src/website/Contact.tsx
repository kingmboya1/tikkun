import React, { useEffect, useState } from 'react'
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";
import '../styles/grid-utils.css';

const Contact: React.FC = () => {

    useEffect(() => {
        document.title = "Contact Us - Tikkun Africa Foundation"
    }, [])

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        { icon: '📍', title: 'Our Location', details: ['Milimani, Kitengela', 'Kajiado, Kenya'] },
        { icon: '📞', title: 'Phone Number', details: ['+254 722 717907'] },
        { icon: '✉️', title: 'Email Address', details: ['talkus@tikkunafricafoundation.org', 'tikkunafrica@gmail.com'] },
        { icon: '🕐', title: 'Working Hours', details: ['Mon - Fri: 8AM - 5PM', 'Sat: 9AM - 1PM'] },
    ];

    return (
        <div className={"page-wrapper"}>

            <Headers />
            <Search />

            {/* Hero Banner */}
            <section style={{
                position: 'relative',
                height: '400px',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/capacity_building.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(34, 139, 34, 0.6) 100%)',
                }}></div>
                <div className="auto-container" style={{
                    position: 'relative',
                    zIndex: 1,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                    <h1 style={{
                        fontSize: 'clamp(28px, 9vw, 52px)',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '15px',
                    }}>
                        Contact Us
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '500px',
                        margin: '0 auto',
                    }}>
                        We'd love to hear from you. Get in touch with us today.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            }}>
                <div className="auto-container">
                    <div className="grid-4" style={{
                        gap: '25px',
                    }}>
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                style={{
                                    background: '#fff',
                                    borderRadius: '20px',
                                    padding: '35px 25px',
                                    textAlign: 'center',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>{info.icon}</span>
                                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '15px' }}>{info.title}</h4>
                                {info.details.map((detail, i) => (
                                    <p key={i} style={{ fontSize: '14px', color: '#666', lineHeight: 1.6, marginBottom: '5px' }}>{detail}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section style={{ padding: '80px 0' }}>
                <div className="auto-container">
                    <div className="grid-2" style={{
                        gap: '60px',
                        alignItems: 'start',
                    }}>
                        {/* Contact Form */}
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
                                Send a Message
                            </span>
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: 700,
                                color: '#1a1a1a',
                                marginBottom: '30px',
                            }}>
                                Get In Touch
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <div className="grid-2" style={{ gap: '20px', marginBottom: '20px' }}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            padding: '16px 20px',
                                            border: '2px solid #e9ecef',
                                            borderRadius: '12px',
                                            fontSize: '15px',
                                            outline: 'none',
                                            transition: 'border-color 0.3s ease',
                                        }}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            padding: '16px 20px',
                                            border: '2px solid #e9ecef',
                                            borderRadius: '12px',
                                            fontSize: '15px',
                                            outline: 'none',
                                            transition: 'border-color 0.3s ease',
                                        }}
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '16px 20px',
                                        border: '2px solid #e9ecef',
                                        borderRadius: '12px',
                                        fontSize: '15px',
                                        outline: 'none',
                                        marginBottom: '20px',
                                        transition: 'border-color 0.3s ease',
                                    }}
                                />
                                <textarea
                                    name="message"
                                    placeholder="Write your message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    style={{
                                        width: '100%',
                                        padding: '16px 20px',
                                        border: '2px solid #e9ecef',
                                        borderRadius: '12px',
                                        fontSize: '15px',
                                        outline: 'none',
                                        marginBottom: '25px',
                                        resize: 'vertical',
                                        transition: 'border-color 0.3s ease',
                                    }}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        padding: '16px 40px',
                                        backgroundColor: '#228B22',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '30px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(34, 139, 34, 0.3)',
                                    }}
                                >
                                    Send Message →
                                </button>
                            </form>
                        </div>

                        {/* Map & Social */}
                        <div>
                            <div style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                marginBottom: '30px',
                            }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.167651665146!2d36.96!3d-1.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0c5a0e9c0a0d%3A0x1c9c2c7e8c4c0a0a!2sKitengela%2C%20Kenya!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                                    width="100%"
                                    height="350"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            {/* Social Links */}
                            <div style={{
                                background: 'linear-gradient(135deg, #228B22 0%, #176B17 100%)',
                                borderRadius: '20px',
                                padding: '30px',
                                color: '#fff',
                            }}>
                                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '15px' }}>
                                    Follow Us
                                </h3>
                                <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '20px' }}>
                                    Stay connected with us on social media for updates and news.
                                </p>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '45px',
                                                height: '45px',
                                                backgroundColor: 'rgba(255,255,255,0.2)',
                                                borderRadius: '50%',
                                                color: '#fff',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            {social.charAt(0)}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )

}

export default Contact