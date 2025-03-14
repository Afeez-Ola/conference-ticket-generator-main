/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './ticket.html',
    '**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        Neutral: {
          veryDark: "#0D082D",
          dark: "#4B4869",
          default: "#8784A5",
          light: "#D1D0D5",
          veryLight: "#FFFFFF",
        },
        Orange: {
          dark: "#E1604F",
          default: "#F57463",
          gradient: "linear-gradient(90deg, #F37362 0%, #FF8A75 100%);",
        }
      },
      backgroundImage: {
        orangeGradient: "linear-gradient(90deg, #F37362 0%, #FFF 100%);",
        blueGradientMobile: "url('/assets/images/background-mobile.png')",
        blueGradientTablet: "url('/assets/images/background-tablet.png')",
        blueGradientDesktop: "url('/assets/images/background-desktop.png')",
        line: "url('/assets/images/pattern-lines.svg')",
        tickets: "url('/assets/images/pattern-ticket.svg')",

      },
      fontFamily: {
        Inconsolata: ["Inconsolata", 'serif']
      }
    },
  },
  plugins: [],
}