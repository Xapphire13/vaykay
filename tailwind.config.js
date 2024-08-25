const { nextui } = require("@nextui-org/theme");
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|checkbox|date-picker|input|ripple|spinner|calendar|date-input|popover).js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "hsl(326, 59%, 57%)",
              foreground: "hsl(326, 100%, 97%)",
            },
            secondary: {
              DEFAULT: "hsl(154, 79%, 87%)",
              foreground: "hsl(154, 79%, 15%)",
            },
          },
        },
      },
    }),
  ],
};
