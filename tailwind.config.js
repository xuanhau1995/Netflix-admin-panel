module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamity: {
        body: ["Poppins"],
      },
      gradientColorStops: {},
      colors: {
        brand: {
          main: "#171717",
          light: "#242424",
          dark2: "#1C1C1C",
          active: "#242424",
          50: "#f9faf9",
          100: "#f0f2f2",
          200: "#dddfe1",
          300: "#b7bdbe",
          400: "#879493",
          500: "#69726c",
          600: "#53574f",
          700: "#3f413c",
          800: "#2b2b2a",
          900: "#000000",
        },
        brandred: {
          50: "#fdfcfb",
          100: "#fcf0ee",
          200: "#f9ccdd",
          300: "#f19ebb",
          400: "#f06c94",
          500: "#ff0000",
          600: "#d22f53",
          700: "#ac243c",
          800: "#7f1927",
          900: "#4e1014",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/line-clamp"),
  ],
};
