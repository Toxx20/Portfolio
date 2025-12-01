// src/pages/About.jsx
import { useEffect } from "react";
import ThemeWrapper from "../components/ThemeWrapper";
import { useLocation } from "react-router-dom";

/**
 * About page — timeline + education
 * - Expériences en premier (plein largeur)
 * - Éducation ensuite
 * - Pas de section "Compétences" ni "Formations & Certifications"
 */

export default function About() {
  const location = useLocation();

  const experiences = [
    {
      title: "Projet d’insertion professionnelle — Plateforme d’aide à l’emploi",
      period: "Avr 2025 — Août 2025",
      bullets: [
        "Développement d’une plateforme web d’aide à l’emploi.",
        "Mise en place d’un data warehouse pour l’analyse du marché.",
        "Intégration d’une IA pour le matching compétences/offres.",
      ],
    },
    {
      title: "Ministère des Mines (Ampasapito) — Système de reporting",
      period: "Nov 2024 — Mar 2025",
      bullets: [
        "Système de reporting et tableau de bord interactif.",
        "Intégration d’un Data Warehouse pour l’analyse consolidée.",
        "Sécurisation (auth JWT, protections CSRF/XSS).",
      ],
    },
    {
      title: "Cabinet Dentaire Gendarmerie CIRGN (Mahamasina) — Gestion RDV",
      period: "Avr 2024 — Août 2024",
      bullets: [
        "Système intelligent de gestion des rendez-vous (+50% efficacité).",
        "Modèle prédictif pour optimiser la planification.",
      ],
    },
    {
      title: "Centre de Fusion Informations Maritimes CFIM (Ankaditoho) — Gestion RH",
      period: "Mars 2023 — Juil 2023",
      bullets: [
        "Gestion des permissions et rôles.",
        "Automatisation des calculs de congés (gain de 60%).",
      ],
    },
  ];

  // Scroll to hash when route changes (keeps UX smooth if using /a-propos#experiences)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true });
        }, 60);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <ThemeWrapper>
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              À propos de moi
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mt-3">
              Développeur Full-Stack & Mobile — je conçois des applications robustes et maintenables,
              en combinant backend solide, interfaces réactives et pipelines data/IA quand nécessaire.
            </p>
          </header>

          {/* EXPERIENCES - full width, first */}
          <div className="mb-12">
            <h2 id="experiences" className="text-2xl font-bold text-blue-400 mb-6 scroll-mt-32">
              Expériences professionnelles
            </h2>

            <div className="relative">
              {/* vertical line for timeline (desktop) */}
              <div className="hidden md:block absolute left-3 top-0 bottom-0 w-px bg-white/6" aria-hidden="true" />

              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <article key={idx} className="relative md:pl-10">
                    {/* dot */}
                    <span
                      className="absolute -left-1 md:left-0 top-4 w-3 h-3 rounded-full bg-blue-400 ring-2 ring-white/6 shadow-sm"
                      aria-hidden="true"
                    />
                    <div className="bg-gray-800/50 p-5 rounded-2xl hover:shadow-lg transition transform hover:-translate-y-1">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                        <time className="text-sm text-gray-400 ml-4" aria-label={exp.period}>
                          {exp.period}
                        </time>
                      </div>
                      <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* EDUCATION - below experiences */}
          <div>
            <h2 id="education" className="text-2xl font-bold text-blue-400 mb-6 scroll-mt-32">
              Éducation
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-2xl">
                <h4 className="font-semibold text-white">ESMIA (Mahamasina)</h4>
                <div className="text-gray-300 text-sm mt-2">
                  Master 2 — Informatique Appliquée à la Gestion d’Entreprise (2025) <br />
                  Licence — Informatique Risque et Décision (2023)
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-2xl">
                <h4 className="font-semibold text-white">Alliance Française (Andavamamba)</h4>
                <div className="text-gray-300 text-sm mt-2">Diplôme B1 (2021)</div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-2xl">
                <h4 className="font-semibold text-white">Lycée Privé Imahatsara (Ampitatafika)</h4>
                <div className="text-gray-300 text-sm mt-2">Baccalauréat A2 (2020)</div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-2xl">
                <h4 className="font-semibold text-white">Auto-école ROSA (Ampitatafika)</h4>
                <div className="text-gray-300 text-sm mt-2">Permis A &amp; B</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton flottant CV */}
      <a
        href="/rakotoharinosynoely.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-white/6 text-white backdrop-blur-sm px-4 py-3 rounded-full shadow-lg flex items-center gap-3 z-50
                   hover:bg-blue-600 hover:shadow-blue-500/30 transition transform hover:-translate-y-0.5"
        aria-label="Ouvrir et télécharger mon CV (nouvel onglet)"
      >
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span className="hidden sm:inline text-sm">Télécharger mon CV</span>
      </a>
    </ThemeWrapper>
  );
}
