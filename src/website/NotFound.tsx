import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";

/* Without a catch-all route, any address that doesn't match a defined route
   rendered a completely blank white page with no header or footer, leaving
   visitors stranded. This gives them the site navigation and a way back. */
const NotFound: React.FC = () => {

    useEffect(() => {
        document.title = "Page Not Found - Tikkun Africa Foundation"
    }, [])

    return (
        <div className={"page-wrapper"}>
            <Headers />
            <Search />

            <section style={{ padding: '120px 0', background: '#f8f9fa', textAlign: 'center' }}>
                <div className="auto-container">
                    <h1 style={{
                        fontSize: 'clamp(28px, 9vw, 52px)',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        marginBottom: '15px',
                    }}>
                        Page Not Found
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        lineHeight: 1.7,
                        maxWidth: '600px',
                        margin: '0 auto 30px',
                    }}>
                        Sorry, the page you are looking for doesn't exist or may have moved.
                    </p>
                    <Link to="/" style={{
                        display: 'inline-block',
                        padding: '14px 32px',
                        backgroundColor: '#2e7d32',
                        color: '#fff',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        fontWeight: 600,
                    }}>
                        Back to Home
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default NotFound
