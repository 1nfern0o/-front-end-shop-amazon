import type { Config } from "tailwindcss";
const twColors = require('tailwindcss/colors')

const colors = {
  transpatent: twColors.transpatent,
  black: '#2E3239',
  gray: '#CDCDCD',
  white: twColors.white,
  primary: '#FF9902',
  secondary: '#161D25',
  'bg-color': '#F2F2F5',
  aqua: '#268697',
  red: twColors.red[400]
}

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    extend: {
      fontSize: {
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '1.36rem',
        '1.5xl': '1.5rem',
        '2xl': '1.175rem',
        '3xl': '2.155rem',
        '4xl': '2.58rem',
        '5xl': '3.45rem',
        '6xl': '4.3rem',
        '7xl': '5.17rem',
        '8xl': '6.9rem',
        '9xl': '9.2rem'
      },
      keyframes: {
        animationOpacity:  {
          from: { opacity: '0.2' },
          to: { opacity: '1' }
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity: '0.3'
          },
          
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        opacity: 'animationOpacity .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out'
      }
    }
  },
  plugins: []
} satisfies Config;
