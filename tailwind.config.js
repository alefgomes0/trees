/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IBMSerifBold: "'IBMSerifBold'",
        IBMSerifBoldItalic: "'IBMSerifBoldItalic'",
        IBMSerifMedium: "'IBMSerifMedium'",
        IBMSerifRegular: "'IBMSerifRegular'",
        IBMSerifLight: "'IBMSerifLight'",
        IBMSerifSemiboldItalic: "'ibmplexserif-semibolditalic-webfont'",
        IBMSerifSemibold: "'IBMSerifSemibold'",
        IBMSansLight: "'IBMSansLight'",
        IBMSansLightItalic: "'IBMSansLightItalic'",
        IBMSansRegular: "'IBMSansMedium'",
        IBMSansMedium: "'IBMSansRegular'",
        IBMMonoSemibold: "'IBMMonoSemibold'",
        IBMMonoRegular: "'IBMMonoRegular'",
      },
      colors: {
        "gwhite": "#cddad0"
      }
    },
  },
  plugins: [],
}