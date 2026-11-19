import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export interface LightboxVideo {
    title: string;
    src: string;
    poster?: string;
}

interface Props {
    videos: LightboxVideo[];
    index: number;
    onClose: () => void;
    onChange: (index: number) => void;
}

const url = (path: string) => `${process.env.PUBLIC_URL}/${path}`;

const navButton: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255,255,255,0.15)',
    color: '#fff',
    fontSize: '28px',
    lineHeight: 1,
    cursor: 'pointer',
    zIndex: 2,
};

/** Full-screen video player shown on top of the page. */
const VideoLightbox: React.FC<Props> = ({ videos, index, onClose, onChange }) => {
    const video = videos[index];
    const hasPrev = index > 0;
    const hasNext = index < videos.length - 1;

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft' && hasPrev) onChange(index - 1);
            if (e.key === 'ArrowRight' && hasNext) onChange(index + 1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [index, hasPrev, hasNext, onClose, onChange]);

    // Stop the page behind from scrolling while the player is open
    useEffect(() => {
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = previous; };
    }, []);

    // Rendered on <body> so the sticky header (z-index 999999) can't cover it
    return createPortal(
        <div
            role="dialog"
            aria-modal="true"
            aria-label={video.title}
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 2147483000,
                background: 'rgba(0,0,0,0.92)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px 16px 24px',
            }}
        >
            <button
                onClick={onClose}
                aria-label="Close video"
                style={{
                    position: 'absolute',
                    top: '14px',
                    right: '20px',
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '44px',
                    lineHeight: 1,
                    cursor: 'pointer',
                    zIndex: 2,
                }}
            >
                &times;
            </button>

            {hasPrev && (
                <button
                    aria-label="Previous video"
                    onClick={(e) => { e.stopPropagation(); onChange(index - 1); }}
                    style={{ ...navButton, left: '16px' }}
                >
                    &#8249;
                </button>
            )}
            {hasNext && (
                <button
                    aria-label="Next video"
                    onClick={(e) => { e.stopPropagation(); onChange(index + 1); }}
                    style={{ ...navButton, right: '16px' }}
                >
                    &#8250;
                </button>
            )}

            <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(1200px, 100%)' }}>
                <video
                    key={video.src}
                    controls
                    autoPlay
                    playsInline
                    poster={video.poster ? url(video.poster) : undefined}
                    style={{
                        width: '100%',
                        maxHeight: '80vh',
                        display: 'block',
                        background: '#000',
                        borderRadius: '12px',
                    }}
                >
                    <source src={url(video.src)} type="video/mp4" />
                </video>
                <p style={{
                    marginTop: '14px',
                    color: '#fff',
                    fontSize: '17px',
                    fontWeight: 600,
                    textAlign: 'center',
                }}>
                    {video.title}
                    {videos.length > 1 && (
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>
                            {'  ·  '}{index + 1} / {videos.length}
                        </span>
                    )}
                </p>
            </div>
        </div>,
        document.body
    );
};

export default VideoLightbox;
