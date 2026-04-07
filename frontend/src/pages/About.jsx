// src/pages/About.jsx
import { useEffect } from "react";
import ThemeWrapper from "../components/ThemeWrapper";
import { useLocation } from "react-router-dom";



export default function About() {
  const location = useLocation();

  const experiences = [
    {
      title: "Fullstack Rdv — Projet personnel",
      period: "Fév 2026 — Avril 2026",
      bullets: [
        "Gestion des permissions et rôles avec des fonctionnalités complètes",
        "Design responsive et moderne",
        "Projet fullstack avec Django Rest Framework + Api Rest + Réact.js + Tailwind css",
        "https://github.com/Toxx20/fullstack-dentiste",
      ],
    },
    {
      title: "Blog Mafia — Projet personnel",
      period: "Déc 2025 — Janv 2026",
      bullets: [
        "Gestion des permissions et rôles avec des fonctionnalités complètes",
        "Projet déjà en production par PythonAnywhere",
        "Fait par Django + Bootstrap 5",
        "https://github.com/Toxx20/blog_mafia",
        "url: https://toky.pythonanywhere.com/"
      ],
    },
    {
      title: "Plateforme d'insertion professionnelle — Projet académique",
      period: "Avr 2025 — Août 2025",
      bullets: [
        "Gestion des permissions et rôles",
        "Plateforme fullstack avec Django Rest Framework + Api Rest + Réact.js",
        "https://github.com/Toxx20/InsertionPro",
      ],
    },
    {
      title: "Email clone avec de l'I.A — Projet personnel",
      period: "Fév 2024 — Juin 2024",
      bullets: [
        "Detection d'un message envoyé si c'est un email ou spam",
        "Mise en œuvre du traitement de texte (TF-IDF) avec Django et Bootstrap 5",
        "https://github.com/Toxx20/messagerie-ai",
      ],
    },
    {
      title: "Centre de Fusion Informations Maritimes CFIM (Ankaditoho) — Gestion RH",
      period: "Mars 2023 — Juil 2023",
      bullets: [
        "Gestion des permissions et rôles",
        "Automatisation des calculs de congés (gain de 60%).",
        "Fait par Django + Bootstrap 4",
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              À propos de moi
            </h2>
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

            {/* 2 colonnes : texte à gauche, photo à droite */}
            <div className="grid md:grid-cols-2 gap-10 items-start">

              {/* --- COLONNE GAUCHE : ÉDUCATION --- */}
                

              <div className="space-y-6">

                <div className="bg-gray-800/50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-white">SaC.Inc (Canada)</h4>
                  <div className="text-gray-300 text-sm mt-2">
                    Gestion de Projet-Certifié (2026)
                  </div>
                </div>

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

              {/* --- COLONNE DROITE : PHOTO --- */}
              <div className="flex justify-center">
                <img
                  src="/education.jpg"
                  alt="Photo diplôme"
                  className="rounded-2xl shadow-xl object-cover w-full md:w-80"
                />
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
