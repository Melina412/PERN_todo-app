import themes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['emerald'],
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dim'],
          secondary: '#BD88E3',
          accent: '#FD6E56',
        },
      },
    ],
  },
};
