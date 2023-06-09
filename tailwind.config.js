/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
        facebook: '#385185',
        Bluee: '#0095f6'
      },
    
      backgroundImage: {
        'logo-pattern': 'url(https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png)'
      }
    },
  },
  plugins: [],
}
