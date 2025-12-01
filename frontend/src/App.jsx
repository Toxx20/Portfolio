// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Specialisation from "./pages/Specialisation";

/**
 * ScrollToTop component:
 * - if there's a hash -> scroll to element matching the hash (smooth)
 * - otherwise -> scroll to top on route change
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // small delay so layout can settle (images/fonts)
    const id = setTimeout(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // optionally focus for accessibility
          el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true });
        } else {
          // fallback to top if anchor not found
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);

    return () => clearTimeout(id);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    // On retire le fond blanc et on garde juste une structure neutre
    <div className="min-h-screen flex flex-col bg-[#0b1020] text-white">
      <Navbar />
      {/* ScrollToTop doit être rendu en dehors de <Routes> pour capter tous les changements */}
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/specialisation" element={<Specialisation />} />
          {/* Optional: add a NotFound route if you have a 404 page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
