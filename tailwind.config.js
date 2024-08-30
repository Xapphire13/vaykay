const { nextui } = require("@nextui-org/theme");
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|checkbox|date-picker|input|table|popover|ripple|spinner|calendar|date-input|spacer).js"
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
            default: { foreground: "hsl(326, 59%, 57%)" },
          },
        },
      },
    }),
  ],
};
