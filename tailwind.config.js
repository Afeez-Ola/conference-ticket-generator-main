/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
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
          default: "#F57463"
        }
      },
      backgroundImage: {
        orangeGradient: "linear-gradient(90deg, #F37362 0%, #FFF 100%);",
        blueGradientMobile: "url('/assets/images/background-mobile.png')",
          blueGradientTablet: "url('/assets/images/background-tablet.png')",
          blueGradientDesktop: "url('/assets/images/background-desktop.png')",
          line: "url('/assets/images/pattern-lines.svg')"
        
      },
      fontFamily: {
        Inconsolata: ["Inconsolata", 'serif']
      }
    },
  },
  plugins: [],
}

