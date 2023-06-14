const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/(pages)/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "16px": ["16px", { lineHeight: "20px" }],
        "20px": ["20px", { lineHeight: "28px" }],
        "24px": ["24px", { lineHeight: "32px" }],
        "28px": ["28px", { lineHeight: "36px" }],
        "32px": ["32px", { lineHeight: "44px" }],
        "36px": ["36px", { lineHeight: "48px" }],
        "40px": ["40px", { lineHeight: "48px" }],
        "48px": ["48px", { lineHeight: "56px" }],
        "52px": ["52px", { lineHeight: "60px" }],
        "56px": ["56px", { lineHeight: "64px" }],
        "64px": ["64px", { lineHeight: "72px" }],
        "72px": ["72px", { lineHeight: "80px" }],
        "88px": ["88px", { lineHeight: "92px" }],
        "92px": ["92px", { lineHeight: "98px" }],
      },
      colors: {
        primary: "#FCA311",
        black: "#000000",
        navy: "#14213D",
        yellow: "#FCA311",
        grey: "#E5E5E5",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
