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
                height: '600px',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/climate-hero-2026.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 40%',
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

            {/* Impact Story */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            }}>
                <div className="auto-container">
                    <div style={{
                        background: '#fff',
                        borderRadius: '20px',
                        padding: '50px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            backgroundColor: 'rgba(46,125,50,0.1)',
                            color: '#2e7d32',
                            borderRadius: '25px',
                            fontSize: '14px',
                            fontWeight: 600,
                            marginBottom: '20px',
                            width: 'fit-content',
                        }}>Impact Story</span>
                        <div style={{
                            width: '100%',
                            height: '320px',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            marginBottom: '25px',
                        }}>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/world-environment-day-2026.jpg`}
                                alt="Volunteers and community members celebrating World Environment Day 2026 on Mayor Road"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: '#1a1a2e',
                            marginBottom: '10px',
                        }}>World Environment Day 2026</h2>
                        <p style={{
                            fontSize: '16px',
                            color: '#888',
                            marginBottom: '25px',
                        }}>June 2026 &middot; Mayor Road Community</p>
                        <div style={{ fontSize: '16px', color: '#444', lineHeight: 1.8 }}>
                            <p style={{ marginBottom: '20px' }}>In June 2026, Tikkun Africa Foundation joined residents of Mayor Road,
                                together with Multilink Express Kenya Ltd and Global Ministries For Christ
                                Church, to celebrate World Environment Day through hands-on environmental
                                restoration work.</p>
                            <p style={{ marginBottom: '20px' }}>Youth studying environmental subjects at their respective colleges took part
                                as a practical extension of their coursework, working alongside mobilized
                                women, men, religious leaders, and residents. Together, the group cleared
                                roadside vegetation and trimmed overgrown trees that had begun to encroach on
                                the road — a hazard to pedestrians, motorcyclists, and vehicles alike, and a
                                breeding ground for mosquitoes and other pests. Clearing this overgrowth also
                                reopened safe play space for neighborhood children.</p>
                            <p style={{ marginBottom: '20px' }}>Collected waste was disposed of responsibly, in line with environmental safety
                                standards. The initiative reflects the strength of community partnerships
                                working toward a shared goal, and reinforces the cleanliness and civic pride
                                that residents already hold as part of their everyday household norms.</p>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '20px',
                            margin: '30px 0',
                        }}>
                            <div style={{
                                background: '#f8f9fa',
                                borderRadius: '12px',
                                padding: '20px',
                                textAlign: 'center',
                            }}>
                                <div style={{ fontSize: '28px', fontWeight: 700, color: '#2e7d32' }}>15+</div>
                                <div style={{ fontSize: '14px', color: '#666' }}>Volunteers &amp; neighboring households</div>
                            </div>
                            <div style={{
                                background: '#f8f9fa',
                                borderRadius: '12px',
                                padding: '20px',
                                textAlign: 'center',
                            }}>
                                <div style={{ fontSize: '28px', fontWeight: 700, color: '#2e7d32' }}>3</div>
                                <div style={{ fontSize: '14px', color: '#666' }}>Partner organizations</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a2e', marginBottom: '15px' }}>Aligned with the Sustainable Development Goals</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                                {[
                                    { code: 'SDG 11', label: 'Sustainable Cities and Communities' },
                                    { code: 'SDG 13', label: 'Climate Action' },
                                    { code: 'SDG 15', label: 'Life on Land' },
                                ].map((sdg, i) => (
                                    <span key={i} style={{
                                        backgroundColor: '#2e7d32',
                                        color: '#fff',
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        fontSize: '13px',
                                        fontWeight: 600,
                                    }}>{sdg.code}: {sdg.label}</span>
                                ))}
                            </div>
                            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>
                                <strong>GRI 413 (Local Communities):</strong> The event demonstrated strong
                                community engagement, mobilizing 15 volunteers and neighboring households
                                alongside three partner organizations — evidence of cleanliness and
                                environmental stewardship as an established social norm within the community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Story - Tree Planting */}
            <section style={{
                padding: '80px 0',
                background: '#fff',
            }}>
                <div className="auto-container">
                    <div style={{
                        background: '#fff',
                        borderRadius: '20px',
                        padding: '50px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                        border: '1px solid #f0f0f0',
                    }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            backgroundColor: 'rgba(46,125,50,0.1)',
                            color: '#2e7d32',
                            borderRadius: '25px',
                            fontSize: '14px',
                            fontWeight: 600,
                            marginBottom: '20px',
                            width: 'fit-content',
                        }}>Impact Story</span>
                        <div style={{
                            width: '100%',
                            height: '320px',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            marginBottom: '25px',
                        }}>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/tree-planting-2025.jpg`}
                                alt="Together we are stronger — community unity graphic for the tree planting initiative"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    backgroundColor: '#f8f9fa',
                                }}
                            />
                        </div>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: '#1a1a2e',
                            marginBottom: '10px',
                        }}>Growing Trees and Building Strong Partnerships</h2>
                        <p style={{
                            fontSize: '16px',
                            color: '#888',
                            marginBottom: '25px',
                        }}>1st May 2025</p>
                        <div style={{ fontSize: '16px', color: '#444', lineHeight: 1.8 }}>
                            <p style={{ marginBottom: '20px' }}>Aligning to SDG 13 on Climate Action and to Kenya's National Vision of
                                planting and growing 15 billion trees by the year 2032, this initiative shows
                                that meaningful progress toward that target is achievable through small
                                actions like these. Tikkun Africa Foundation complements the environmental
                                restoration strategy led by the Government.</p>
                            <p style={{ marginBottom: '20px' }}>Through collaboration with Kenyan Administration Chiefs at DO's Camps, we
                                embed tree growing into community leadership structures, ensuring that the
                                President's directive on tree planting becomes a testimony.</p>
                            <p style={{ marginBottom: '20px' }}>Inclusivity initiatives always bring accountability and thrive through
                                collaboration. Women, men, and youth assist in mobilization and in creating
                                awareness through their digital platforms for sensitization and execution.</p>
                            <p style={{ marginBottom: '20px' }}>Local leadership also offers accountability and sustainability. The Kaburu
                                Beauty and Salon, along with other businesses, support vulnerable groups
                                while advancing environmental goals. By planting trees, we are planting hope,
                                equity, and opportunity. Each seedling represents a step toward achieving
                                Kenya's National Climate Change Action Plan and the Sustainable Development
                                Goals (SDGs):</p>
                            <p style={{ marginBottom: '20px' }}>SDG 13: Climate Action – mitigating climate change through reforestation.<br />
                                SDG 15: Life on Land – protecting ecosystems and biodiversity.<br />
                                SDG 17: Partnerships for the Goals – building strong alliances for
                                sustainable impact.</p>
                            <p style={{ marginBottom: '20px' }}>This program is not only about restoring forests — it is about uplifting
                                vulnerable groups, creating livelihoods, and fostering resilience.</p>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a2e', marginBottom: '15px' }}>Aligned with the Sustainable Development Goals</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {[
                                    { code: 'SDG 13', label: 'Climate Action' },
                                    { code: 'SDG 15', label: 'Life on Land' },
                                    { code: 'SDG 17', label: 'Partnerships for the Goals' },
                                ].map((sdg, i) => (
                                    <span key={i} style={{
                                        backgroundColor: '#2e7d32',
                                        color: '#fff',
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        fontSize: '13px',
                                        fontWeight: 600,
                                    }}>{sdg.code}: {sdg.label}</span>
                                ))}
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