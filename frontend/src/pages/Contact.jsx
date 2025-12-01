import ThemeWrapper from "../components/ThemeWrapper";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <ThemeWrapper>
      <section className="max-w-3xl mx-auto py-16 text-center text-white">
        <h1 className="text-4xl font-extrabold mb-6">
          Contactez-moi
        </h1>

        <p className="text-gray-300 mb-10 text-lg leading-relaxed">
          Vous avez un projet, une collaboration ou une opportunité à me proposer ?  
          Je serai ravi d’en discuter avec vous.  
          Choisissez le moyen qui vous convient le mieux.
        </p>

        {/* Boutons de contact */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:rakotoharinosynoely@gmail.com"
            className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-blue-600 
                       text-white px-6 py-3 rounded-xl transition-all shadow-lg w-full sm:w-auto"
          >
            <Mail className="w-5 h-5 text-blue-400" />
            <span>Envoyer un Email</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/261384481403"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-green-700 hover:bg-green-600 
                       text-white px-6 py-3 rounded-xl transition-all shadow-lg w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Discuter sur WhatsApp</span>
          </a>
        </div>

        {/* Texte final */}
        <p className="mt-12 text-gray-400 text-sm">
          Je réponds généralement sous 24 à 48 heures.  
          Merci de votre visite 🤝
        </p>
      </section>
    </ThemeWrapper>
  );
}
