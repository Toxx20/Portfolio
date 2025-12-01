import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-900 text-gray-400">
      <div className="container mx-auto py-8 px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Texte de gauche */}
        <div className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Toky R.</span> — Développeur
          Full-Stack & Mobile. Tous droits réservés.
        </div>

        {/* Liens sociaux */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Toxx20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg hover:bg-white/10 text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/noely-rakotoharinosy-7b6146317/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg hover:bg-white/10 text-white transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:rakotoharinosynoely@gmail.com"
            aria-label="Email"
            className="p-2 rounded-lg hover:bg-white/10 text-white transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
