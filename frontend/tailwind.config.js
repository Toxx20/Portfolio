/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: {
          50:"#eef6ff",100:"#d9ecff",200:"#bfe0ff",300:"#95ccff",
          400:"#5fb0ff",500:"#2f98ff",600:"#177ce6",700:"#0f63b7",
          800:"#0f5496",900:"#0f477b",
        },
      },
      boxShadow: { soft: "0 10px 30px -12px rgba(31,41,55,.25)" },
    },
  },
  plugins: [],
}
