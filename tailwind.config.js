/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/public/assets/bg-shadow.png')",
        'subscribe-gradient': 'linear-gradient(90deg, #FFD700, #FF69B4)',
         'newsletter-gradient': 'linear-gradient(to left, #FDE9D9, #FFFFFF)',
      },
    },
  },
  plugins: [],
}

