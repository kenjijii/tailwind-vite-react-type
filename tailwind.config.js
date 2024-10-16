/** @type {import('tailwindcss').Config} */
export default {


 content: [

  "./index.html",

  "./src/**/*.{js,ts,jsx,tsx}"],

 theme: {
  extend: {},
 },
 plugins: [],
 darkMode: 'class',
 safelist: [
  'text-3xl'//ここに記載されたものは必ずバンドルされる 
 ]
}
