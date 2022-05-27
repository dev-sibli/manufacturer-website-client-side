module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        jantriktheme: {
          primary: "#326BFF",
          secondary: "#313234",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#FFFFFF",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
