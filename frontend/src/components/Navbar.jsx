// src/components/Navbar.jsx
import { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/40 ${
        isActive ? "bg-white/10 text-white" : "text-gray-300 hover:text-white hover:bg-white/6"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [aboutOpen, setAboutOpen] = useState(false); // desktop dropdown open state (for click/keyboard)
  const dropdownRef = useRef(null);

  // verrouille le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ferme le menu mobile + dropdown sur 'Escape'
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setAboutOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close about dropdown when clicking outside
  useEffect(() => {
    const onClick = (e) => {
      if (aboutOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [aboutOpen]);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/6">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Aller à l'accueil">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-extrabold
                       bg-gradient-to-br from-[color:var(--brand-500)] to-[color:var(--brand-600)]
                       shadow-md ring-1 ring-white/6"
            title="Toky R."
          >
            TR
          </div>

          <div className="hidden sm:block">
            <div className="font-extrabold text-white leading-none">Toky R.</div>
            <div className="text-xs text-gray-400">Full-Stack</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3" role="navigation" aria-label="Navigation principale">
          <NavItem to="/">Accueil</NavItem>
          <NavItem to="/projets">Projets</NavItem>
          <NavItem to="/specialisation">Spécialisations</NavItem>

          {/* Dropdown A-propos */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              onClick={() => setAboutOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={aboutOpen}
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/6 transition inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            >
              À-propos
              {/* Chevron */}
              <svg className={`w-3 h-3 transform transition-transform ${aboutOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M6 8l4 4 4-4" />
              </svg>
            </button>

            {/* Dropdown content */}
            <div
              className={`absolute left-0 mt-2 w-64 bg-gray-900 border border-white/10 rounded-xl shadow-xl z-50 transform origin-top transition-all ${
                aboutOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
              }`}
              role="menu"
              aria-label="Sous-menu À-propos"
            >
              <NavLink
                to="/a-propos#experiences"
                className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/6 hover:text-white rounded-t-xl"
                role="menuitem"
              >
                Expériences Professionnelles
              </NavLink>

              <NavLink
                to="/a-propos#education"
                className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/6 hover:text-white rounded-b-xl"
                role="menuitem"
              >
                Éducation
              </NavLink>
            </div>
          </div>

          <NavItem to="/contact">Contact</NavItem>

          {/* CV button (small) */}
          <a
            href="/rakotoharinosynoely.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 py-2 rounded-lg text-sm text-gray-200 bg-white/6 hover:bg-white/10 transition-flex flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
            aria-label="Ouvrir mon CV dans un nouvel onglet"
            title="Ouvrir mon CV"
          >
            {/* download svg */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="hidden sm:inline text-sm">CV</span>
          </a>
        </nav>

        {/* Mobile Menu Button (animated hamburger) */}
        <button
          className="md:hidden p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400/30"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>

          {/* Animated bars */}
          <div className="w-6 h-5 relative">
            <span
              className={`block absolute left-0 top-0 w-6 h-0.5 bg-white transform transition duration-300 ${open ? "rotate-45 top-2.5" : "translate-y-0"}`}
            />
            <span
              className={`block absolute left-0 top-2.25 w-6 h-0.5 bg-white transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block absolute left-0 top-4.5 w-6 h-0.5 bg-white transform transition duration-300 ${open ? "-rotate-45 top-2.5" : "translate-y-0"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Nav (slide down) */}
      <div
        id="mobile-menu"
        className={`md:hidden transform origin-top transition-all duration-250 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div className="border-t border-white/6 bg-gray-900/95 backdrop-blur-sm">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-2">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-white/6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400/30"
            >
              Accueil
            </NavLink>

            <NavLink
              to="/projets"
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-white/6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400/30"
            >
              Projets
            </NavLink>

            <NavLink
              to="/specialisation"
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-white/6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400/30"
            >
              Spécialisations
            </NavLink>

            {/* Mobile version of A-propos with two sub-links */}
            <div className="flex flex-col bg-gray-900/40 rounded-lg">
              <div className="px-3 py-2 text-gray-400 uppercase text-xs">À-propos</div>

              <NavLink
                to="/a-propos#experiences"
                onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-lg hover:bg-white/6 text-gray-300 hover:text-white"
              >
                Expériences Professionnelles
              </NavLink>

              <NavLink
                to="/a-propos#education"
                onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-lg hover:bg-white/6 text-gray-300 hover:text-white"
              >
                Éducation
              </NavLink>
            </div>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg bg-[color:var(--brand-600)] text-white text-center font-semibold hover:bg-[color:var(--brand-500)] transition focus:outline-none focus:ring-2 focus:ring-blue-400/30"
            >
              Contact
            </NavLink>

            <a
              href="/rakotoharinosynoely.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-3 rounded-lg text-sm text-gray-200 bg-white/6 hover:bg-white/10 transition flex items-center gap-2 justify-center"
              onClick={() => setOpen(false)}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
