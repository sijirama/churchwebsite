/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                manrope: ['Manrope', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif'],
                kanit: ['Kanit', 'sans-serif']
            },
            colors: {
                mylightgray: '#ede8e8'
            }
        }
    },
    plugins: []
}
