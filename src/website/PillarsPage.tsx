import React, { useEffect } from "react";
import Headers from "../layouts/Headers";
import Search from "../layouts/Search";
import Footer from "../layouts/Footer";
import Pillars from "../layouts/Pillars";

/* The /pillars route previously rendered the Pillars layout section on its
   own, which is meant to be embedded inside the Home page - so the page had
   no header, no navigation and no footer, leaving visitors stranded with no
   way back. Wrap it in the standard page chrome instead. */
const PillarsPage: React.FC = () => {

    useEffect(() => {
        document.title = "Our Pillars - Tikkun Africa Foundation"
    }, [])

    return (
        <div className={"page-wrapper"}>
            <Headers />
            <Search />
            <Pillars />
            <Footer />
        </div>
    )
}

export default PillarsPage
