import React, { useEffect } from "react";
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";

const Transformation: React.FC = () => {

    useEffect(() => {
        document.title = "Transformative Education and Empowerment - Tikkun Africa Foundation"
    }, [])

    const keyPoints = [
        { icon: '🎓', title: 'Skills Training', desc: 'Equipping women and youth with practical skills for self-reliance' },
        { icon: '👶', title: "Children's Rights", desc: 'Teaching children to understand and protect their rights' },
        { icon: '🌱', title: 'Mentorship', desc: 'Ongoing guidance for personal and community development' },
        { icon: '💪', title: 'Empowerment', desc: 'Building confidence and resilience in communities' },
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
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/transform.jpg)`,
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
                        fontSize: '52px',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '15px',
                        maxWidth: '700px',
                    }}>
                        Transformative Education & Empowerment
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '600px',
                        lineHeight: 1.7,
                    }}>
                        Equipping women and youth with skills, knowledge, and resources for self-reliance.
                    </p>
                </div>
            </section>

            {/* Key Points Grid */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            }}>
                <div className="auto-container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
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
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '60px',
                        alignItems: 'start',
                    }}>
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '20px' }}>
                                Building Resilient Communities
                            </h2>
                            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                                We foster growth and self-reliance by equipping women and youth with the skills, knowledge, and resources they need to confidently build resilient communities and drive sustainable development.
                            </p>
                            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                                Continuous engagement and mentorship sessions embracing the impacts of Personified Leadership training 'Leading by the heart - where all people matters and bridging the gap of gender, social injustice and decent pay in the workplace.
                            </p>
                            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '25px' }}>
                                Children have a right to live and thrive in the communities. Embracing positive peace speaking and role modeling, we give children an opportunity to grow up responsibly. We groom them to know their rights and welfare, and guide them on how to access affirmative action in case of any violation of their rights.
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
                                    Why Support This Pillar?
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {[
                                        'Empower women and youth through life skills and mentorship',
                                        'Guide children to understand and protect their rights',
                                        'Promote positive peace speaking and role modeling',
                                        'Build wholesome communities with values',
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
                        Support Transformative Education
                    </h2>
                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                        Your donation helps us empower more women and youth across Africa.
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
                        💚 Make a Donation
                    </a>
                </div>
            </section>

            <Footer />

        </div>
    )

}

export default Transformation