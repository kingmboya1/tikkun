import React, { useEffect } from "react";
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";

const Climate: React.FC = () => {

    useEffect(() => {
        document.title = "Climate Action & Renewable Energy - Tikkun Africa Foundation"
    }, [])

    const keyPoints = [
        { icon: '🌱', title: 'Sustainable Farming', desc: 'Farming kits and climate-smart agriculture practices' },
        { icon: '☀️', title: 'Renewable Energy', desc: 'Solar and clean cooking technologies for communities' },
        { icon: '♻️', title: 'Recycling', desc: 'Waste management and resource conservation programs' },
        { icon: '🌍', title: 'Environmental Care', desc: 'Ecosystem restoration and conservation projects' },
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
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/climate.jpg)`,
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
                        Climate Action & Renewable Energy
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '600px',
                        lineHeight: 1.7,
                    }}>
                        Building resilience through sustainable practices and clean energy solutions.
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
                                Sustainable Resilience
                            </h2>
                            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                                Following the uncertainty of weather patterns with unprecedented rainfalls, Tikkun Africa has embraced sustainable ways of being resilient.
                            </p>
                            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                                We provide Farming Kits to support women groups based on viability and commitment. Our installations include kitchen gardens that help families sustain themselves year-round while generating surplus income through vegetable sales.
                            </p>
                            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '25px' }}>
                                From our training, communities also embrace poultry farming, using green leaves to improve egg production. Waste products are composted and used as fertilizer. Tikkun Africa is very keen on embracing renewable energy and recycling for a better ecosystem.
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
                                    Why Climate Action Matters
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {[
                                        'Solar and clean cooking technologies reduce harmful fuel dependency',
                                        'Climate-smart agriculture manages risk and boosts food security',
                                        'Youth and women lead green innovation projects',
                                        'Awareness programs promote sustainability and recycling',
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
                        Support Climate Action
                    </h2>
                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                        Help us build sustainable, climate-resilient communities across Africa.
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
                        🌱 Make a Donation
                    </a>
                </div>
            </section>

            <Footer />

        </div>
    )

}

export default Climate