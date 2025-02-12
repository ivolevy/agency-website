module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'negro-mate': 'var(--negro-mate)',
        'rosa': "var(--rosa)",
        "gris-claro": "var(--gris-claro)",
        "gris-oscuro": "var(--gris-oscuro)",
        "gris-opaco": "var(--gris-opaco)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
