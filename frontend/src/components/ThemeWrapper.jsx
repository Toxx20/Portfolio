// src/components/ThemeWrapper.jsx
import { useEffect } from "react";

export default function ThemeWrapper({ children, className = "", minFull = true }) {
  useEffect(() => {
    // 🌌 Conteneur pour les effets visuels
    const binaryContainer = document.createElement("div");
    binaryContainer.className = "binary-stream";
    document.body.appendChild(binaryContainer);

    const codeContainer = document.createElement("div");
    codeContainer.className = "code-lines";
    document.body.appendChild(codeContainer);

    // 🧬 Génère les chiffres 0 et 1
    const generateBinary = () => {
      const span = document.createElement("span");
      span.textContent = Math.random() > 0.5 ? "1" : "0";
      span.style.left = Math.random() * 100 + "vw";
      span.style.animationDuration = 5 + Math.random() * 10 + "s";
      binaryContainer.appendChild(span);
      setTimeout(() => span.remove(), 15000);
    };

    // 💻 Génère des lignes de code qui apparaissent / disparaissent
    const codeSnippets = [
      "const user = await getUser();",
      "if (data.isValid) save(data);",
      "return response.status(200);",
      "<div className='card'></div>",
      "for (let i=0; i<items.length; i++)",
      "function initApp() { start(); }",
      "console.log('AI powered ⚡');",
      "while(true) optimize();",
      "fetch('/api/data').then(r=>r.json());",
      "print('Hello, World!')",
      "SELECT * FROM users WHERE active=1;",
      "def compute(x): return x*x",
      "class ThemeWrapper extends React.Component { ... }",
      "let result = await process(input);",
      "echo 'Deploying...';", 
      "import React from 'react';",
      "system.out.println('Java code');",
      "#include <stdio.h>",
      "func main() { fmt.Println('Go!') }",
      "package.json dependencies: { ... }",
      
    ];

    const generateCodeLine = () => {
      const div = document.createElement("div");
      div.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      div.className = "code-line";
      div.style.top = Math.random() * 80 + "vh";
      div.style.left = Math.random() * 70 + "vw";
      codeContainer.appendChild(div);
      setTimeout(() => div.remove(), 6000);
    };

    const binaryInterval = setInterval(generateBinary, 200);
    const codeInterval = setInterval(generateCodeLine, 2500);

    return () => {
      clearInterval(binaryInterval);
      clearInterval(codeInterval);
      binaryContainer.remove();
      codeContainer.remove();
    };
  }, []);

  return (
    <div className={`relative ${minFull ? "min-h-screen" : ""} developer-night ${className}`}>
      <div className="container mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
}
