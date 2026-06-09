import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import NavBar from "./components/layout/NavBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import PageLoader from "./components/ui/PageLoader.jsx";
import CookieBanner from "./components/ui/CookieBanner.jsx";

// Páginas carregadas sob demanda (code splitting) — cada uma vira um chunk próprio.
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Portfollium = lazy(() => import("./pages/Portfollium.jsx"));
const Contacts = lazy(() => import("./pages/Contacts.jsx"));
const LegalPage = lazy(() => import("./pages/LegalPage.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    const location = useLocation();

    return (
        <div>
            <NavBar />
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
                <div key={location.pathname} className="route-fade">
                    <Routes location={location}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sobrenos" element={<AboutUs />} />
                    <Route path="/servicos" element={<Services />} />
                    <Route path="/portfolio" element={<Portfollium />} />
                    <Route path="/contactos" element={<Contacts />} />
                    <Route path="/privacidade" element={<LegalPage titleKey="privacyPolicy" introKey="privacyIntro" />} />
                    <Route path="/cookies" element={<LegalPage titleKey="cookiePolicy" introKey="cookieIntro" />} />
                    <Route path="/termos" element={<LegalPage titleKey="terms" introKey="termsIntro" />} />
                    <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Suspense>
            <Footer />
            <CookieBanner />
        </div>
    );
}

export default App;
