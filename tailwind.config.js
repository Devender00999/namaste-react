/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Files in src directory
      "./*.{js,jsx,ts,tsx}", // Files in the root directory
   ],
   theme: {
      extend: {},
   },
   plugins: [
      require("@tailwindcss/forms")({
         strategy: "base", // only generate global styles
         strategy: "class", // only generate classes
      }),
   ],
};
