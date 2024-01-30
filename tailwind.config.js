/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // The two objects below are added as extra features to the extend object.
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)'} // This moves the item 100% to the right side.
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite' // This line means, finds the shimmer, play it on the span of 1.5 seconds forever.
      }
    },
  },
  plugins: [],
}

