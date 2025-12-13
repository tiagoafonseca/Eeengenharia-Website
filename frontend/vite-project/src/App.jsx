import NavBar from "./components/NavBar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import Portfollium from "./pages/Portfollium.jsx";
import Contacts from "./pages/Contacts.jsx";
import Footer from "./components/Footer.jsx";
import { useTranslation } from "react-i18next";
import {useEffect} from "react";
import NavAux from "./components/NavAux.jsx";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Sempre que muda de página, vai para o topo
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    const { t } = useTranslation();
    const location = useLocation(); // Hook para saber a rota atual

    return (
        <div>
            <NavAux />
            <ScrollToTop />
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<HomePage />} />
                <Route path='/sobrenos' element={<AboutUs />} />
                <Route path='/servicos' element={<Services />} />
                <Route path='/portfolio' element={<Portfollium />} />
                <Route path='/contactos' element={<Contacts />} />
                <Route path='/navaux' element={<NavAux />} />
                {/*<Route path='/navnormal' element={<NavBar />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
