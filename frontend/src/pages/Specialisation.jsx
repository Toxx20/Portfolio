// src/pages/Specialisation.jsx
import React from "react";
import ThemeWrapper from "../components/ThemeWrapper";

/**
 * TechCard: réutilisable — logo (URL ou null), titre, badge (version), description et lien optionnel.
 */
const TechCard = ({ logo, title, badge, desc, href }) => (
  <article className="group relative bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 overflow-hidden">
    {/* Effet de brillance au survol */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
    
    <div className="relative flex items-start gap-4">
      {logo ? (
        <div className="w-16 h-16 flex-shrink-0 p-2 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-white/5 group-hover:border-blue-400/30 transition-all duration-300 group-hover:scale-110">
          <img src={logo} alt={`${title} logo`} className="w-full h-full object-contain" />
        </div>
      ) : (
        <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center text-base font-bold text-white group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 group-hover:scale-110">
          {title.split(" ").map(w => w[0]).slice(0,2).join("")}
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 flex-wrap mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
          {badge && (
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-200 font-medium">
              {badge}
            </span>
          )}
        </div>

        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">{desc}</p>

        {href && (
          <div className="mt-4">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group-hover:scale-105"
            >
              En savoir plus
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  </article>
);

const SectionHeader = ({ title, subtitle, icon }) => (
  <div className="mb-8">
    <div className="flex items-center gap-4 mb-2">
      {icon && <span className="text-3xl">{icon}</span>}
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
    <p className="text-gray-400 text-sm md:text-base ml-0 md:ml-14">{subtitle}</p>
  </div>
);

export default function Specialisation() {
  return (
    <ThemeWrapper>
      <main className="min-h-screen bg-gray-900 text-gray-200 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Header */}
          <header className="mb-16 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Mes Spécialisations
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Stack complet — Frontend, Backend, Frameworks, Data / IA et outils DevOps. 
              <br className="hidden md:block" />
              <span className="text-blue-300 font-semibold">Construit pour la production, optimisé pour la maintenabilité.</span>
            </p>
          </header>

          {/* Backend + Frontend Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Backend */}
            <div className="space-y-6">
              <SectionHeader 
                title="Backend" 
                subtitle="APIs robustes, microservices, architecture scalable"
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                title="Java"
                badge="JDK 17 LTS"
                desc="Applications d'entreprise, microservices, Spring Boot, sécurité et performance pour production haute disponibilité."
                href="https://spring.io/projects/spring-boot"
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                title="Python"
                badge="Python 3.10+"
                desc="APIs REST/GraphQL, scripts automation, data pipelines. Frameworks Django/FastAPI pour développement rapide et productif."
                href="https://www.djangoproject.com/"
              />
            </div>

            {/* Frontend */}
            <div className="space-y-6">
              <SectionHeader 
                title="Frontend & UI" 
                subtitle="Interfaces modernes, réactives et accessibles"
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                title="React"
                badge="React 18+"
                desc="SPAs performantes, composants réutilisables, hooks avancés, React Router, SSR/SSG avec Next.js pour une expérience utilisateur optimale."
                href="https://react.dev/"
              />

              <TechCard
                logo="https://www.svgrepo.com/show/374118/tailwind.svg"
                title="Tailwind CSS"
                badge="Utility-first"
                desc="Design system moderne et cohérent, responsive design, dark mode natif. Développement rapide avec composants réutilisables."
                href="https://tailwindcss.com/"
              />
            </div>
          </section>

          {/* Frameworks & Architecture */}
          <section className="mb-16">
            <SectionHeader 
              title="Frameworks & Architecture" 
              subtitle="Patterns MVC/MVT, REST APIs, authentification sécurisée"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TechCard
                logo="https://www.svgrepo.com/show/353657/django-icon.svg"
                title="Django"
                badge="MVT Pattern"
                desc="Framework full-stack Python — ORM puissant, interface admin, sécurité intégrée, Django REST Framework pour APIs robustes."
                href="https://www.djangoproject.com/"
              />

              <TechCard
                logo="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg"
                title="Spring Boot"
                badge="Java Enterprise"
                desc="Microservices cloud-native, Spring Security pour authentification, Spring Data JPA, monitoring et déploiement kubernetes-ready."
                href="https://spring.io/projects/spring-boot"
              />
            </div>
          </section>

          {/* IA & ML */}
          <section className="mb-16">
            <SectionHeader 
              title="IA, NLP & Vision" 
              subtitle="Computer Vision • Natural Language Processing • Machine Learning"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <TechCard
                logo={null}
                title="YOLOv8"
                badge="Ultralytics"
                desc="Détection et segmentation d'objets temps réel. Déploiement edge/cloud, inférence optimisée GPU/CPU."
                href="https://docs.ultralytics.com/models/yolov8/"
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                title="TF-IDF"
                badge="NLP"
                desc="Vectorisation de texte pour classification et recherche sémantique. Intégration scikit-learn pour pipelines ML."
                href="https://scikit-learn.org/stable/modules/feature_extraction.html"
              />

              <TechCard
                logo={null}
                title="Clustering"
                badge="KMeans / DBSCAN"
                desc="Segmentation non-supervisée, découverte de patterns. KMeans, DBSCAN, évaluation avec métriques silhouette."
                href="https://scikit-learn.org/stable/modules/clustering.html"
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                title="Web Scraping"
                badge="BeautifulSoup"
                desc="Extraction de données web pour ETL. BeautifulSoup, Requests, Playwright pour sites JavaScript dynamiques."
                href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
              />
            </div>
          </section>

          {/* Databases & DevOps */}
          <section className="mb-8">
            <SectionHeader 
              title="Bases de données & DevOps" 
              subtitle="Persistance, caching, conteneurisation et CI/CD"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                title="PostgreSQL"
                badge="SQL"
                desc="SGBD relationnel robuste. ACID, indexation avancée, fonctions window, support JSON pour hybride SQL/NoSQL."
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                title="MongoDB"
                badge="NoSQL"
                desc="Base documentaire flexible. Schéma dynamique, réplication, sharding horizontal pour scalabilité massive."
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                title="Redis"
                badge="In-Memory"
                desc="Cache ultra-rapide, pub/sub, sessions utilisateur. Structures de données avancées pour queues et leaderboards."
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                title="Docker"
                badge="Containers"
                desc="Conteneurisation complète, Docker Compose pour stacks multi-services. Déploiement reproductible et portable."
              />
            </div>
          </section>
        </div>
      </main>
    </ThemeWrapper>
  );
}
