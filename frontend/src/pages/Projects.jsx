// src/pages/Projects.jsx
import React from "react";
import ThemeWrapper from "../components/ThemeWrapper";
import MitadyA from "../assets/MitadyA.png";
import WuTangClanLogo from "../assets/WuTangClanLogo.png";

const TechBadge = ({ logo, name }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/60 border border-white/10 rounded-lg hover:border-blue-400/30 transition-all duration-300">
    <img src={logo} alt={name} className="w-5 h-5 object-contain" />
    <span className="text-xs font-medium text-gray-300">{name}</span>
  </div>
);

const ProjectCard = ({ 
  title, 
  coverImage, 
  technologies, 
  githubUrl, 
  liveUrl,
  videoUrl, 
}) => (
  <article className="group relative bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30">
    {/* Effet de brillance au survol */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none z-10" />
    
    {/* Image de couverture */}
    <div className="relative h-64 overflow-hidden bg-gray-900">
      <img 
        src={coverImage} 
        alt={`${title} preview`} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      
      {/* Badges de technologies superposés */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-20">
        {technologies.map((tech, idx) => (
          <TechBadge key={idx} logo={tech.logo} name={tech.name} />
        ))}
      </div>
    </div>

    {/* Contenu de la card */}
    <div className="relative p-6 space-y-4 z-20">
      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h3>

      {/* Boutons d'action */}
      <div className="flex flex-col gap-3">
        {/* Bouton GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 border border-white/10 hover:border-white/30 text-white font-semibold transition-all duration-300 hover:scale-105"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          Voir sur GitHub
        </a>

        {/* Bouton Live Demo ou Démo Vidéo */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Voir le Projet en Ligne
          </a>
        )}

        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Vidéo à venir
          </a>
        )}

      </div>
    </div>
  </article>
);

export default function Projects() {
  // Données des projets
  const projects = [
    {
      title: "Blog_Mafia",
      coverImage: "WuTangClanLogo",
      technologies: [
        {
          logo: "https://www.svgrepo.com/show/353657/django-icon.svg",
          name: "Django"
        },
        {
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          name: "MySQL"
        },
        {
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          name: "Bootstrap 5"
        }
      ],
      githubUrl: "https://github.com/Toxx20/blog_mafia",
      liveUrl: "https://toky.pythonanywhere.com/",
      docUrl: "/path/to/documentation.pdf" 
    },
    {
      title: "Mitady Asa",
      coverImage: MitadyA, 
      technologies: [
        {
          logo: "https://www.svgrepo.com/show/353657/django-icon.svg",
          name: "Django"
        },
        {
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          name: "MySQL"
        },
        {
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          name: "Bootstrap 5"
        },
        {
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          name: "BeautifulSoup4"
        },
        {
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          name: "Requests"
        }
      ],
      githubUrl: "https://github.com/Toxx20/MitadyAsa",
      videoUrl: "#",  
    }
  ];

  return (
    <ThemeWrapper>
      <main className="min-h-screen bg-gray-900 text-gray-200 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Header */}
          <header className="mb-16 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Mes Projets
            </h1>
          </header>

          {/* Projects Grid - 3 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
            
            {/* Placeholder pour le 3ème projet */}
            <div className="bg-gray-800/40 border-2 border-dashed border-gray-700 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
              <p className="text-gray-500 text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Projet Full Stack à venir
              </p>
            </div>
          </div>
        </div>
      </main>
    </ThemeWrapper>
  );
}