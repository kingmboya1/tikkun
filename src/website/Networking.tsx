import React, { useEffect } from "react";
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";
import '../styles/grid-utils.css';

const Networking: React.FC = () => {

    useEffect(() => {
        document.title = "Networking & Partnerships - Tikkun Africa Foundation"
    }, [])

    const keyPoints = [
        { icon: '🤝', title: 'Partnerships', desc: 'Strategic collaborations with mission-aligned organizations' },
        { icon: '🌍', title: 'Global Reach', desc: 'Connecting communities across Africa and beyond' },
        { icon: '💡', title: 'Knowledge Sharing', desc: 'Exchanging expertise and best practices' },
        { icon: '🎯', title: 'Collective Impact', desc: 'Amplifying outcomes through unified efforts' },
    ];

    return (
        <div className={"page-wrapper"}>

            <Headers />
            <Search />

            {/* Hero Banner */}
            <section style={{
                position: 'relative',
                height: '500px',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/resource/cause-image-1.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(46, 125, 50, 0.6) 100%)',
                }}></div>
                <div className="auto-container" style={{
                    position: 'relative',
                    zIndex: 1,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '8px 20px',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        color: '#fff',
                        borderRadius: '25px',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginBottom: '20px',
                        width: 'fit-content',
                    }}>
                        Our Pillars
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(28px, 9vw, 52px)',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '15px',
                        maxWidth: '700px',
                    }}>
                        Networking & Partnerships
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '600px',
                        lineHeight: 1.7,
                    }}>
                        Building alliances to amplify impact and advance sustainable practices.
                    </p>
                </div>
            </section>

            {/* Key Points Grid */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            }}>
                <div className="auto-container">
                    <div className="grid-4" style={{
                        gap: '25px',
                    }}>
                        {keyPoints.map((point, index) => (
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
                                <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>{point.icon}</span>
                                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px' }}>{point.title}</h4>
                                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '80px 0' }}>
                <div className="auto-container">
                    <div className="grid-2" style={{
                        gap: '60px',
                        alignItems: 'start',
                    }}>
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '20px' }}>
                                Stronger Together
                            </h2>
                            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                                We create and nurture strategic collaborations with like-minded organizations, communities, and stakeholders to amplify impact, share resources, and advance sustainable practices across Africa.
                            </p>
                            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                                By working hand in hand with grassroots leaders, local institutions, and mission-aligned partners, we co-create solutions tailored to real community needs.
                            </p>
                            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '25px' }}>
                                These collaborations not only strengthen our collective impact but also ensure that sustainable practices are deeply rooted, locally owned, and scalable across diverse regions in Africa.
                            </p>
                        </div>
                        <div>
                            <div style={{
                                background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
                                borderRadius: '20px',
                                padding: '40px',
                                color: '#fff',
                            }}>
                                <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>
                                    Why Partnerships Matter
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {[
                                        'Collaborate with communities for inclusive development',
                                        'Reach under-resourced areas with shared knowledge',
                                        'Mobilize resources for greater collective impact',
                                        'Foster long-term, meaningful change across Africa',
                                    ].map((item, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '12px',
                                            marginBottom: '15px',
                                            fontSize: '15px',
                                            lineHeight: 1.6,
                                        }}>
                                            <span style={{ color: '#8bc34a', fontSize: '18px' }}>✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                textAlign: 'center',
            }}>
                <div className="auto-container">
                    <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '15px' }}>
                        Partner With Us
                    </h2>
                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                        Join our network to create lasting impact together.
                    </p>
                    <a href="/donate" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '16px 40px',
                        backgroundColor: '#2e7d32',
                        color: '#fff',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '16px',
                        boxShadow: '0 4px 20px rgba(46, 125, 50, 0.5)',
                    }}>
                        🤝 Make a Donation
                    </a>
                </div>
            </section>

            <Footer />

        </div>
    )

}

export default Networking