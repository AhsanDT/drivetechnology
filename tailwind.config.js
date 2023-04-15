/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jakarta": ["Plus Jakarta Sans", "sans-serif"],
        "oswald": ['Oswald', "sans-serif"],
        "roboto": ['Roboto', "sans-serif"],
        "poppins": ['Poppins', "sans-serif"],
        sans: ["Inter", "sans-serif"],
        
      },
  
    },
    screens: {
      
        'sm': '640px',
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      
      'cxs': '480px',
      'csm': '544px',
      'cmd': '585px',
      '1xl': '1400px',
      '3xl': '1700px',
      '4xl': '1926px',
      '5xl': '2150px',
      '6xl': '2370px',
      '7xl': '2510px',
      '8xl': '2860px',
    }
  
  },
  plugins: [],
};
