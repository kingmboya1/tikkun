import React, { useEffect, useState } from "react";
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";
import '../styles/grid-utils.css';

const Transformation: React.FC = () => {

    useEffect(() => {
        document.title = "Transformative Education and Empowerment - Tikkun Africa Foundation"
    }, [])

    const heroSlides = [
        `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-15.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-02.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-07.jpg`,
    ];
    const [heroSlide, setHeroSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setHeroSlide(prev => (prev + 1) % heroSlides.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [heroSlides.length])

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
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${slide})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: index === heroSlide ? 1 : 0,
                            transition: 'opacity 0.8s ease-in-out',
                        }}
                    ></div>
                ))}
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
            
                {/* Impact Story: Mgandini Primary School */}
                <section style={{ padding: '80px 0', background: '#fff' }}>
                    <div className="auto-container">
                        <span style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            backgroundColor: 'rgba(46,125,50,0.1)',
                            color: '#2e7d32',
                            borderRadius: '25px',
                            fontSize: '14px',
                            fontWeight: 600,
                            marginBottom: '15px'
                        }}>
                            Impact Story
                        </span>
                        <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '20px' }}>
                            Supporting National Exam Candidates in Kinango
                        </h2>
                        <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#555', maxWidth: '800px', marginBottom: '30px' }}>
                            On 11th July 2026, Tikkun Africa Foundation, in collaboration with Yasmin Girl Empowerment and Global Ministries For Christ Church, visited Mgandini Primary School in Kinango, Kwale County, one of the sub-county's marginalized regions. The initiative supported Grade 6 and Grade 9 pupils preparing for their National Examinations in October 2026, ensuring their mental state is settled through the provision of basic needs and bridging the gap of absenteeism for girls during their menstrual cycle.
                        </p>
                        <div className="grid-3" style={{ gap: '25px', marginBottom: '40px' }}>
                            <div style={{ background: '#f8f9fa', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                                <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Sanitary Pads</h4>
                                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#555' }}>
                                    180 girls received 2 pads each, totaling 360 pads distributed.
                                </p>
                            </div>
                            <div style={{ background: '#f8f9fa', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                                <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Underwear</h4>
                                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#555' }}>
                                    170 boys received 2 pieces each, totaling 340 pieces distributed.
                                </p>
                            </div>
                            <div style={{ background: '#f8f9fa', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                                <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Life Skills Sessions</h4>
                                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#555' }}>
                                    Sessions on menstrual health, discipline, behavior, life skills, children's rights, and access to protection services, led by trained Menstrual Health Champions, educators, a pastor, and guidance and counseling officials.
                                </p>
                            </div>
                        </div>
                        <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>
                            Aligned with the UN Sustainable Development Goals
                        </h3>
                        <div className="grid-2" style={{ gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#2e7d32', fontWeight: 700 }}>SDG 3</span>
                                <p style={{ fontSize: '15px', color: '#555', margin: 0 }}>Good Health & Well-being — mental health, life skills, and menstrual health through sanitary pad provision.</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#2e7d32', fontWeight: 700 }}>SDG 4</span>
                                <p style={{ fontSize: '15px', color: '#555', margin: 0 }}>Quality Education — supporting exam candidates by reducing barriers to attendance and concentration.</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#2e7d32', fontWeight: 700 }}>SDG 5</span>
                                <p style={{ fontSize: '15px', color: '#555', margin: 0 }}>Gender Equality — empowering girls through menstrual dignity and boys through equitable support.</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#2e7d32', fontWeight: 700 }}>SDG 6</span>
                                <p style={{ fontSize: '15px', color: '#555', margin: 0 }}>Clean Water & Sanitation — advocacy for access to facilities and hygiene resources.</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#2e7d32', fontWeight: 700 }}>SDG 17</span>
                                <p style={{ fontSize: '15px', color: '#555', margin: 0 }}>Partnerships for the Goals — collaboration with Yasmin Girl Empowerment, Global Ministries For Christ, and other stakeholders.</p>
                            </div>
                        </div>
                    </div>
                </section>

            {/* Impact Story Section */}
                <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
                    <div className="auto-container">
                        <span style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            backgroundColor: 'rgba(46,125,50,0.1)',
                            color: '#2e7d32',
                            borderRadius: '25px',
                            fontSize: '14px',
                            fontWeight: 600,
                            marginBottom: '15px'
                        }}>
                            Impact Story
                        </span>
                        <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '20px' }}>
                            Celebrating International Women's Day 2025
                        </h2>
                        <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#555', maxWidth: '800px', marginBottom: '30px' }}>
                            Celebrating International Women's Day 2025 with a theme dear to our vision, "Accelerate Action," Tikkun provides a platform for ALL women and girls to access Transformative Education and Empowerment. We hosted successful sessions for women and teenage mothers from underprivileged communities. These sessions had both direct and indirect impact in the community.
                        </p>
                        <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>
                            Direct Impact
                        </h3>
                        <div className="grid-3" style={{ gap: '25px' }}>
                            <div style={{ background: '#fff', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                                <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Access to Education</h4>
                                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#555' }}>
                                    Training in financial skills, entrepreneurship, and life skills that build resilience and promote inclusion within the community, while finding a niche to work well with male allies.
                                </p>
                            </div>
                            <div style={{ background: '#fff', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                                <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Confidence & Guidance</h4>
                                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#555' }}>
                                    Empowering women, especially young teenage mothers, to build confidence in decision-making, and granting them information to access proper health care services.
                                </p>
                            </div>
                            <div style={{ background: '#fff', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                                <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Role Models & Peer Networks</h4>
                                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#555' }}>
                                    Mapping participants with role models and building peer-to-peer networks for support and further engagement, strengthening communities.
                                </p>
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