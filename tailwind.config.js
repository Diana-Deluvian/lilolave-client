module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        islandMoments: ['"Island Moments"', 'system-ui'],
        arvo: ['"Arvo"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
