/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:     '#0a0a0f',
        cyan:   '#06b6d4',
        violet: '#7c3aed',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-up':    'fade-up 0.7s ease-out forwards',
        'train-glow': 'train-glow 2s ease-in-out infinite',
        'dot-pulse':  'dot-pulse 2.5s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'train-glow': {
          '0%,100%': { boxShadow: '0 0 8px rgba(6,182,212,0.7)' },
          '50%':      { boxShadow: '0 0 18px rgba(6,182,212,1), 0 0 30px rgba(6,182,212,0.4)' },
        },
        'dot-pulse': {
          '0%,100%': { transform: 'scale(1)', opacity: '1' },
          '50%':      { transform: 'scale(1.25)', opacity: '0.8' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
