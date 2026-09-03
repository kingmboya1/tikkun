import React from "react";
import { Link } from "react-router-dom";
import '../styles/grid-utils.css';

const pillarsData = [
    {
        title: "Transformative Education & Empowerment",
        description: "We foster growth and self-reliance by equipping women and youth with the skills, knowledge, and resources they need to confidently build resilient communities and drive sustainable development.",
        image: "cause-image-2.jpg",
        link: "/transformation",
        icon: "🎓"
    },
    {
        title: "Climate Action & Renewable Energy",
        description: "We champion environmental sustainability by promoting climate-smart solutions, advocating for renewable energy, and driving initiatives that mitigate climate change's impact on communities.",
        image: "cause-image-3.jpg",
        link: "/climate",
        icon: "🌱"
    },
    {
        title: "Organization Capacity Development",
        description: "We strengthen the capabilities of individuals and institutions by providing tailored training, tools, and frameworks to ensure effective governance, management, and long-term impact.",
        image: "cause-image-4.jpg",
        link: "/organization",
        icon: "📈"
    },
    {
        title: "Networking & Partnerships",
        description: "We create and nurture strategic collaborations with like-minded organizations, communities, and stakeholders to amplify impact, share resources, and advance sustainable practices across the Globe.",
        image: "cause-image-1.jpg",
        link: "/networking",
        icon: "🤝"
    }
];

const Pillars: React.FC = () => {
    return (
        <section style={{
            padding: '100px 0',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        }}>
            <div className="auto-container">
                {/* Section Title */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
                        What We Do
                    </span>
                    <h2 style={{
                        fontSize: '42px',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        marginBottom: '15px',
                    }}>
                        Our Pillars
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto',
                    }}>
                        Building Sustainable Communities through Transformative Education and Empowerment, Climate Action, Partnerships and effective Organizations Capacity programs
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid-4" style={{
                    gap: '25px',
                }}>
                    {pillarsData.map((pillar, index) => (
                        <div
                            key={index}
                            style={{
                                background: '#fff',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                                transition: 'all 0.4s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                            }}
                        >
                            {/* Image Container. The zoom-on-hover needs overflow:hidden to
                                stay inside the card, but the icon badge below deliberately
                                hangs 25px past the bottom edge - so the image gets its own
                                clipping wrapper and the badge sits outside it, otherwise the
                                badge (and its icon) is sliced in half. */}
                            <div style={{ position: 'relative' }}>
                                <div style={{ overflow: 'hidden', lineHeight: 0 }}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/resource/${pillar.image}`}
                                        alt={pillar.title}
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            objectFit: 'cover',
                                            transition: 'transform 0.4s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                {/* Icon Badge */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-25px',
                                    left: '25px',
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#228B22',
                                    borderRadius: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px',
                                    boxShadow: '0 5px 20px rgba(34, 139, 34, 0.4)',
                                }}>
                                    {pillar.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '40px 25px 25px' }}>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    color: '#1a1a1a',
                                    marginBottom: '12px',
                                    lineHeight: 1.3,
                                }}>
                                    {pillar.title}
                                </h3>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#666',
                                    lineHeight: 1.7,
                                    marginBottom: '20px',
                                }}>
                                    {pillar.description}
                                </p>
                                <Link
                                    to={pillar.link}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: '#228B22',
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        textDecoration: 'none',
                                        transition: 'gap 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                                    onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}
                                >
                                    Learn More
                                    <span style={{ fontSize: '18px' }}>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;