import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const Home = lazy(() => import('./website/Home'));
const Contact = lazy(() => import('./website/Contact'));
const About = lazy(() => import('./website/About'));
const Networking = lazy(() => import('./website/Networking'));
const Transformation = lazy(() => import('./website/Transformation'));
const Organization = lazy(() => import('./website/Organization'));
const Climate = lazy(() => import('./website/Climate'));
const Donate = lazy(() => import('./website/Donate'));
const DonateSuccess = lazy(() => import('./website/DonateSuccess'));
const Gallery = lazy(() => import('./website/Gallery'));
const Partners = lazy(() => import('./website/Partners'));
const Events = lazy(() => import('./website/Events'));
const EventDetail = lazy(() => import('./website/EventDetail'));
const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const PillarsPage = lazy(() => import('./website/PillarsPage'));
const NotFound = lazy(() => import('./website/NotFound'));

function App() {

    return (
        <Router>
            <Suspense fallback={<div />}> 
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/contact"} element={<Contact />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/networking"} element={<Networking />} />
                    <Route path={"/transformation"} element={<Transformation />} />
                    <Route path={"/organization"} element={<Organization />} />
                    <Route path={"/climate"} element={<Climate />} />
                    <Route path={"/donate"} element={<Donate />} />
                    <Route path={"/donate/success"} element={<DonateSuccess />} />
                    <Route path={"/gallery"} element={<Gallery />} />
                    <Route path={"/partners"} element={<Partners />} />
                    <Route path={"/events"} element={<Events />} />
                    <Route path={"/events/:id"} element={<EventDetail />} />
                    <Route path={"/pillars"} element={<PillarsPage />} />
                    <Route path={"/dashboard/*"} element={<Dashboard />} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );

}

export default App;
