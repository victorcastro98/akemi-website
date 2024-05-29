/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          'lavanda-basic': '#4C55A3',
          'lavanda-white': '#FFF3F5',
          
        },
        backgroundImage: {
          'title-bg-about': "url('/src/assets/ak1.png')",
          'title-bg-aromas': "url('/src/assets/aromas.png')",
          'title-bg-kits': "url('/src/assets/kits.png')",
          'kits': "url('/src/assets/kits.png')",
          'bg-kits2': "url('/src/assets/kits2.png')",
          'bg-kits3': "url('/src/assets/kits3.png')",
          'bg-kits4': "url('/src/assets/kits4.png')",
          'koibito': "url('/src/assets/koibito.png')",
          'hannah': "url('/src/assets/hannah.png')",
          'midori': "url('/src/assets/midori.png')",
          'kawaii': "url('/src/assets/hannah.png')",
          'exemple': "url('/src/assets/midori.png')",
        },
        fontFamily: {
          'kristi': ['Kristi', 'cursive'],
          'syne': ["Syne", 'sans-serif'],
        },
      },
    },
  plugins: [],
}

