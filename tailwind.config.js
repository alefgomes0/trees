/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "IBMSerifBold": "ibm-plex-serifbold",
      "IBMSerifBoldItalic": "ibm-plex-serifbold-italic",
      "IBMSerifSemibold": ["ibm_plex_serifsemibold"],
      "IBMSerifSemiboldItalic": "ibm-plex-serifsemibold-italic",
      "IBMSerifRegular": "ibm-plex-serifregular",
      "IBMSerifItalic": "ibm-plex-serifitalic",
      "IBMSerifLight": "ibm-plex-seriflight",
      "IBMSerifLightItalic": "ibm-plex-seriflight-italic",
      "IBMSansBold": "ibm-plex-sansbold",
      "IBMSansRegular": "ibmplexsansregular",
      "IBMSansLight": "ibm-plex-sanslight",
      "IBMMonoRegular": "ibmplexmonoregular",
      "IBMMonoBold": "ibm-plex-monobold",
      "IBMMonoBoldItalic": "ibm-plex-monobold-italic",
      "IBMMonoSemibold": "ibm-plex-monosemibold",
      "IBMMonoSemiboldItalic": "ibm-plex-monosemibold-italic"
    }
  },
  plugins: [],
}