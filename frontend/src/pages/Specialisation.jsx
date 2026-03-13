// src/pages/Specialisation.jsx
import React from "react";
import ThemeWrapper from "../components/ThemeWrapper";

/**
 * TechCard: réutilisable — logo (URL ou null), titre, badge (version), description et lien optionnel.
 */
const TechCard = ({ logo, title, badge, desc, href, isLearning }) => (
  <article className="group relative bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 overflow-hidden">
    {/* Effet de brillance au survol */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
    
    {/* Badge "En cours d'apprentissage" */}
    {isLearning && (
      <div className="absolute top-4 right-4 z-20">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 text-amber-300">
          En apprentissage
        </span>
      </div>
    )}
    
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
          </header>

          {/* Langages de Programmation */}
          <section className="mb-16">
            <SectionHeader 
              title="Langages de Programmation" 
              subtitle="Maîtrise de Python et JavaScript pour le développement web full-stack"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                title="Python"
                badge="Python 3.10+"
                desc="Développement backend robuste, scripts d'automatisation, traitement de données. Maîtrise des bonnes pratiques, patterns de conception et architecture scalable."
                href="https://www.python.org/"
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                title="JavaScript"
                badge="ES6+"
                desc="Développement frontend moderne, manipulation DOM, asynchrone avec async/await. Utilisation avec React pour interfaces utilisateur interactives et performantes."
                href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
              />
            </div>
          </section>

          {/* Framework Backend */}
          <section className="mb-16">
            <SectionHeader 
              title="Frameworks Backend" 
              subtitle="Architecture MVT, APIs REST, sécurité et authentification"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <TechCard
                logo="https://www.svgrepo.com/show/353657/django-icon.svg"
                title="Django"
                badge="Framework Full-Stack"
                desc="Framework Python complet pour applications web robustes. ORM Django, système d'authentification sécurisé, interface admin personnalisable, templates engine puissant."
                href="https://www.djangoproject.com/"
              />

              <TechCard
                logo="https://www.svgrepo.com/show/353657/django-icon.svg"
                title="Django REST Framework"
                badge="DRF"
                desc="Création d'APIs RESTful professionnelles. Sérialisation avancée, authentification JWT/Token, permissions granulaires, pagination et filtrage. Idéal pour architectures découplées."
                href="https://www.django-rest-framework.org/"
              />
            </div>
          </section>

          {/* Frameworks Frontend */}
          <section className="mb-16">
            <SectionHeader 
              title="Frameworks Frontend" 
              subtitle="Interfaces modernes, réactives et performantes"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                title="React + Vite"
                badge="React 18+"
                desc="SPAs performantes avec React et build ultra-rapide avec Vite. Composants réutilisables, hooks modernes, état global. HMR instantané pour développement optimisé."
                href="https://react.dev/"
                isLearning={false}
              />
            </div>
          </section>

          {/* UI Frameworks */}
          <section className="mb-16">
            <SectionHeader 
              title="UI & Design Systems" 
              subtitle="Frameworks CSS modernes pour interfaces élégantes"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <TechCard
                logo="https://www.svgrepo.com/show/374118/tailwind.svg"
                title="Tailwind CSS"
                badge="Utility-first"
                desc="Design system moderne avec classes utilitaires. Développement rapide, responsive design, dark mode natif. Personnalisation complète avec configuration Tailwind."
                href="https://tailwindcss.com/"
                isLearning={true}
              />

              <TechCard
                logo="https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg"
                title="DaisyUI"
                badge="Tailwind Components"
                desc="Bibliothèque de composants pour Tailwind CSS. Boutons, cards, modals, forms pré-stylés. Thèmes personnalisables, accessibilité intégrée, gain de productivité."
                href="https://daisyui.com/"
                isLearning={false}
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                title="Bootstrap"
                badge="Bootstrap 5"
                desc="Création d'interfaces utilisateur responsives et accessibles. Système de grille flexible, composants réutilisables. Intégration fluide avec Django templates."
                href="https://getbootstrap.com/"
              />
            </div>

          </section>

          {/* Bases de Données */}
          <section className="mb-16">
            <SectionHeader 
              title="Bases de Données" 
              subtitle="SQL et NoSQL pour persistance de données robuste"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                title="MySQL"
                badge="SGBD Relationnel"
                desc="Base de données relationnelle fiable. Requêtes SQL optimisées, transactions ACID, indexation performante. Intégration native avec Django ORM."
                href="https://www.mysql.com/"
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                title="PostgreSQL"
                badge="SQL Avancé"
                desc="SGBD relationnel robuste et performant. Support JSON, fonctions window, indexation GiST/GIN. Idéal pour applications complexes avec Django."
                href="https://www.postgresql.org/"
                isLearning={true}
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                title="MongoDB"
                badge="NoSQL"
                desc="Base documentaire flexible. Schéma dynamique, requêtes expressives, agrégations puissantes. Scalabilité horizontale pour données non-structurées."
                href="https://www.mongodb.com/"
                isLearning={true}
              />
            </div>
          </section>

          {/* Web Scraping */}
          <section className="mb-16">
            <SectionHeader 
              title="Web Scraping & Extraction de Données" 
              subtitle="Collecte et traitement automatisé de données web"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                title="BeautifulSoup"
                badge="Parsing HTML/XML"
                desc="Extraction intelligente de données depuis pages web. Parsing HTML/XML robuste, navigation DOM intuitive. Idéal pour scraping de contenu structuré."
                href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                title="Requests"
                badge="HTTP Client"
                desc="Bibliothèque HTTP élégante pour interactions web. Sessions persistantes, gestion authentification, cookies. Essentiel pour automatisation et APIs REST."
                href="https://requests.readthedocs.io/"
              />
            </div>
          </section>

          {/* Intelligence Artificielle */}
          <section className="mb-16">
            <SectionHeader 
              title="Intelligence Artificielle & Machine Learning" 
              subtitle="Apprentissage automatique et modèles prédictifs"
            />

            <div className="grid grid-cols-1 max-w-2xl mx-auto">
              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                title="Machine Learning"
                badge="Scikit-learn / TensorFlow"
                desc="Apprentissage supervisé et non-supervisé. Régression, classification, clustering. Prétraitement de données, feature engineering, évaluation de modèles. Déploiement de modèles ML."
                href="https://scikit-learn.org/"
                isLearning={true}
              />
            </div>
          </section>

          {/* Outils de Développement */}
          <section className="mb-16">
            <SectionHeader 
              title="Outils de Développement" 
              subtitle="Versioning, collaboration et workflow professionnel"
            />

            <div className="grid grid-cols-1 max-w-2xl mx-auto">
              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                title="Git & GitHub"
                badge="Version Control"
                desc="Gestion de versions avec Git. Branches, merge, rebase, pull requests. Collaboration en équipe, workflows Git Flow. Code review et CI/CD avec GitHub Actions."
                href="https://git-scm.com/"
              />
            </div>
          </section>

          {/* Systèmes d'Exploitation */}
          <section className="mb-8">
            <SectionHeader 
              title="Systèmes d'Exploitation" 
              subtitle="Environnements de développement maîtrisés"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
                title="Linux Ubuntu"
                badge="Ubuntu 24.04 LTS"
                desc="Système d'exploitation principal pour développement. Maîtrise de la ligne de commande (bash), gestion de paquets (apt), configuration serveur. Environnement privilégié pour Django."
                href="https://ubuntu.com/"
              />

              <TechCard
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
                title="Windows"
                badge="Windows 10/11"
                desc="Environnement de développement alternatif. Utilisation de PowerShell, WSL2 pour intégration Linux. Configuration multi-plateforme pour compatibilité maximale."
                href="https://www.microsoft.com/windows"
              />
            </div>
          </section>
        </div>
      </main>
    </ThemeWrapper>
  );
}