import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import Portfollium from "./pages/Portfollium.jsx";
import Contacts from "./pages/Contacts.jsx";
import NavBar from "./components/layout/NavBar.jsx";
import Footer from "./components/layout/Footer.jsx";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <div>
            <NavBar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobrenos" element={<AboutUs />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/portfolio" element={<Portfollium />} />
                <Route path="/contactos" element={<Contacts />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
