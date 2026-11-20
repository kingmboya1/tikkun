import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";
import { events } from "../data/events";
import VideoLightbox from "./VideoLightbox";

const sectionBadge: React.CSSProperties = {
    display: 'inline-block',
    padding: '8px 20px',
    backgroundColor: 'rgba(34,139,34,0.1)',
    color: '#228B22',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: '30px',
    width: 'fit-content',
};

const EventDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = events.find((e) => e.id === id);
    const [openVideo, setOpenVideo] = useState<number | null>(null);
    const closeVideo = useCallback(() => setOpenVideo(null), []);

    useEffect(() => {
        document.title = event
            ? `${event.title} - Tikkun Africa Foundation`
            : "Event Not Found - Tikkun Africa Foundation";
    }, [event]);

    if (!event) {
        return (
            <div className="page-wrapper">
                <Headers />
                <Search />
                <section style={{ padding: '120px 0', textAlign: 'center' }}>
                    <div className="auto-container">
                        <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a2e', marginBottom: '20px' }}>
                            Event not found
                        </h2>
                        <p style={{ fontSize: '16px', color: '#555', marginBottom: '30px' }}>
                            The event you're looking for doesn't exist or may have been removed.
                        </p>
                        <Link to="/events" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '14px 32px',
                            backgroundColor: '#228B22',
                            color: '#fff',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '15px',
                        }}>
                            ← Back to Events
                        </Link>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

    return (
        <div className="page-wrapper">
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
                    backgroundImage: `url(${process.env.PUBLIC_URL}/${event.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(34,139,34,0.55) 100%)',
                }}></div>
                <div className="auto-container" style={{
                    position: 'relative',
                    zIndex: 1,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    // Anchor to the bottom so long titles grow upwards, away from
                    // the sticky header that overlaps the top of this banner
                    justifyContent: 'flex-end',
                    paddingBottom: '56px',
                }}>
                    <h1 style={{
                        fontSize: 'clamp(28px, 4.2vw, 48px)',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '16px',
                        maxWidth: '750px',
                        lineHeight: 1.2,
                    }}>
                        {event.title}
                    </h1>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                    }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '15px',
                        }}>
                            <span className="icon far fa-calendar-alt"></span>
                            {event.date}
                        </span>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '15px',
                        }}>
                            <span className="icon fa fa-map-marker-alt"></span>
                            {event.location}
                        </span>
                        {event.extra && (
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'rgba(255,255,255,0.9)',
                                fontSize: '15px',
                            }}>
                                <span className="icon fa fa-users"></span>
                                {event.extra}
                            </span>
                        )}
                    </div>
                </div>
            </section>

            {/* Description */}
            <section style={{ padding: '80px 0', background: '#fff' }}>
                <div className="auto-container">
                    <div style={{
                        maxWidth: '820px',
                        margin: '0 auto',
                    }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            backgroundColor: 'rgba(34,139,34,0.1)',
                            color: '#228B22',
                            borderRadius: '25px',
                            fontSize: '14px',
                            fontWeight: 600,
                            marginBottom: '24px',
                            width: 'fit-content',
                        }}>
                            About This Event
                        </span>
                        {event.description.split('\n\n').map((para, i) => (
                            <p key={i} style={{
                                fontSize: '17px',
                                color: '#444',
                                lineHeight: 1.85,
                                marginBottom: '18px',
                            }}>
                                {para}
                            </p>
                        ))}
                    </div>
                    {event.featuredImage && (
                        <div style={{ maxWidth: '1000px', margin: '40px auto 0' }}>
                            <img
                                src={`${process.env.PUBLIC_URL}/${event.featuredImage}`}
                                alt={event.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '16px',
                                    boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
                                }}
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* Videos */}
            {((event.youtube && event.youtube.length > 0) || (event.videos && event.videos.length > 0)) && (
                <section style={{ padding: '80px 0', background: '#fff', borderTop: '1px solid #eee' }}>
                    <div className="auto-container">
                        <span style={sectionBadge}>Videos</span>

                        {event.youtube?.map((yt) => (
                            <div key={yt.id} style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
                                <div style={{
                                    position: 'relative',
                                    aspectRatio: '16/9',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
                                    background: '#000',
                                }}>
                                    <iframe
                                        src={`https://www.youtube-nocookie.com/embed/${yt.id}`}
                                        title={yt.title}
                                        loading="lazy"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                                    />
                                </div>
                                <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: 600, color: '#1a1a2e', textAlign: 'center' }}>
                                    {yt.title}
                                </p>
                            </div>
                        ))}

                        {event.videos && event.videos.length > 0 && (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
                                gap: '24px',
                            }}>
                                {event.videos.map((v, i) => (
                                    <div key={v.src}>
                                        <button
                                            type="button"
                                            onClick={() => setOpenVideo(i)}
                                            aria-label={`Play video: ${v.title}`}
                                            style={{
                                                position: 'relative',
                                                display: 'block',
                                                width: '100%',
                                                padding: 0,
                                                border: 'none',
                                                cursor: 'pointer',
                                                borderRadius: '16px',
                                                overflow: 'hidden',
                                                boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
                                                background: '#000',
                                                aspectRatio: '16/9',
                                            }}
                                        >
                                            {v.poster && (
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/${v.poster}`}
                                                    alt=""
                                                    loading="lazy"
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                />
                                            )}
                                            <span style={{
                                                position: 'absolute',
                                                inset: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: 'rgba(0,0,0,0.25)',
                                            }}>
                                                <span style={{
                                                    width: '68px',
                                                    height: '68px',
                                                    borderRadius: '50%',
                                                    background: '#228B22',
                                                    color: '#fff',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '26px',
                                                    paddingLeft: '5px',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
                                                }}>
                                                    &#9654;
                                                </span>
                                            </span>
                                        </button>
                                        <p style={{ marginTop: '10px', fontSize: '15px', fontWeight: 600, color: '#1a1a2e' }}>
                                            {v.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {event.videos && openVideo !== null && (
                            <VideoLightbox
                                videos={event.videos}
                                index={openVideo}
                                onClose={closeVideo}
                                onChange={setOpenVideo}
                            />
                        )}

                        {event.links && event.links.length > 0 && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
                                {event.links.map((l) => (
                                    <a
                                        key={l.url}
                                        href={l.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '14px 28px',
                                            backgroundColor: '#f8f9fa',
                                            color: '#228B22',
                                            borderRadius: '30px',
                                            textDecoration: 'none',
                                            fontWeight: 600,
                                            fontSize: '15px',
                                            border: '1px solid #e0e0e0',
                                        }}
                                    >
                                        <span className="fa fa-external-link-alt"></span>
                                        {l.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Additional Images */}
            {event.additionalImages && event.additionalImages.length > 0 && (
                <section style={{
                    padding: '80px 0',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                }}>
                    <div className="auto-container">
                        <span style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            backgroundColor: 'rgba(34,139,34,0.1)',
                            color: '#228B22',
                            borderRadius: '25px',
                            fontSize: '14px',
                            fontWeight: 600,
                            marginBottom: '30px',
                            width: 'fit-content',
                        }}>
                            Photos
                        </span>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '20px',
                        }}>
                            {event.additionalImages.map((src, i) => (
                                <div key={i} style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
                                    aspectRatio: '4/3',
                                }}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${src}`}
                                        alt={`${event.title} – photo ${i + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Documents */}
            {event.documents && event.documents.length > 0 && (
                <section style={{ padding: '80px 0', background: '#fff' }}>
                    <div className="auto-container">
                        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '8px 20px',
                                backgroundColor: 'rgba(34,139,34,0.1)',
                                color: '#228B22',
                                borderRadius: '25px',
                                fontSize: '14px',
                                fontWeight: 600,
                                marginBottom: '24px',
                                width: 'fit-content',
                            }}>
                                Documents
                            </span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {event.documents.map((doc, i) => (
                                    <a
                                        key={i}
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '14px 24px',
                                            backgroundColor: '#f8f9fa',
                                            color: '#228B22',
                                            borderRadius: '12px',
                                            textDecoration: 'none',
                                            fontWeight: 600,
                                            fontSize: '15px',
                                            border: '1px solid #e0e0e0',
                                            transition: 'background 0.2s ease',
                                        }}
                                    >
                                        <span className="fa fa-file-download"></span>
                                        {doc.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Bottom back link */}
            <section style={{ padding: '40px 0 80px', background: '#fff' }}>
                <div className="auto-container" style={{ textAlign: 'center' }}>
                    <Link to="/events" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '14px 36px',
                        backgroundColor: '#228B22',
                        color: '#fff',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '15px',
                        boxShadow: '0 4px 20px rgba(34,139,34,0.35)',
                    }}>
                        ← Back to Events
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default EventDetail;
