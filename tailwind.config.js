import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    "bg-btn-green": '#0BE58A',
  },
  plugins: [daisyui],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  }
  
}



