/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 50s linear infinite",
        wiggle: 'wiggle 1s ease-in-out infinite',
        wiggleLeft: 'wiggleLeft 1s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 2.5rem))',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'translateX(-3rem)' },
          '50%': { transform: 'translateX(3rem)' },
        },
        wiggleLeft: {
          '0%, 100%': { transform: 'translateX(3rem)' },
          '50%': { transform: 'translateX(-3rem)' },
        }
      },
    },
  },
  plugins: [
    {
      /*
      plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          "clip-path": (value) => ({
            clipPath: `polygon(${value} ${value},calc(100% - ${value}) ${value},calc(100% - ${value}) calc(100% - ${value}),${value} calc(100% - ${value}))`
          }),
        },
        { values: theme('spacing') }
      )
    })
    */
    }
    
  ],
}