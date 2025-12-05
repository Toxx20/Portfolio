import ProjectCard from "../components/ProjectCard";
import ThemeWrapper from "../components/ThemeWrapper";
import myPhoto from "../assets/acc_cropped.jpg";
import { Link } from "react-router-dom";


export default function Home() {
  const sample = [
    {
      id: 1,
      title: "Mines Reporting",
      description: "Dashboard de reporting, charts et export.",
      stack: "Django,React,Postgres",
      image_url:
        "https://images.unsplash.com/photo-1526378729143-99b8d3d4c7a6?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "App Mobile Sync",
      description: "Prototype mobile avec sync offline.",
      stack: "React Native,Django",
      image_url:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Chat & Notifications",
      description: "Service temps réel, Redis & WebSocket.",
      stack: "Django,Redis,WebSocket",
      image_url:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <ThemeWrapper>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texte principal */}
          <div>
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-wide">
              Développeur Full-Stack & Mobile
            </p>

            <h5 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Développeur fullstack, je conçois des expériences digitales{" "}
              <span className="text-blue-400">fluides</span> et{" "}
              <span className="text-blue-300">intelligentes</span>.
            </h5>

            <p className="mt-5 text-gray-300 max-w-lg leading-relaxed">
              J’aide les entreprises et les particuliers à transformer leurs idées
              en produits performants, modernes et centrés sur l’utilisateur.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              {/* Bouton Projets */}
              <Link
                to="/projets"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-lg"
              >
                {/* Icône Folder */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6l2 2h8a2 2 0 0 1 2 2Z" />
                </svg>
                Voir mes projets
              </Link>

              {/* Bouton Contact */}
              <Link
                to="/contact"
                className="px-6 py-3 border border-blue-500 text-blue-300 rounded-lg hover:bg-blue-600 hover:text-white transition flex items-center gap-2 shadow-lg"
              >
                {/* Icône Mail */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
                Contact
              </Link>

              {/* Bouton Télécharger CV */}
              <a
                href="/rakotoharinosynoely.pdf"
                download="Rakotoharinosynoely_CV.pdf"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2 shadow-lg"
              >
                {/* Icône Download */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Télécharger mon CV
              </a>
            </div>
          </div>

          {/* Illustration / Card */}
          <div className="bg-gray-800 p-6 rounded-2xl surface">
            <img
              src={myPhoto}
              alt="preview"
              className="w-full h-64 object-cover rounded-md"
            />

            {/* mini cards */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="p-3 text-sm">
                <div className="text-xs text-gray-400">Backend</div>
                <div className="font-semibold text-white">Django & DRF</div>
              </div>
              <div className="p-3 text-sm">
                <div className="text-xs text-gray-400">Front</div>
                <div className="font-semibold text-white">React / Vite</div>
              </div>
            </div>
          </div>
        </div>
      </ThemeWrapper>

      {/* Section Projets */}
      <section className="bg-gray-950 text-gray-100 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-400">
            Projets récents
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sample.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
