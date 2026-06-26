/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // 1. Centralized Color Palette
      colors: {
        brand: {
          surface: "#F5F5F5",
          line: "#C5C5C5",
          textDark: "#111827",
          textMuted: "#4B5563",
        }
      },
      spacing: {
        // Your responsive fluid clamp spaces
        'fluid-header-mt': 'var(--fluid-header-mt, 30px)',
        'fluid-header-py': 'var(--fluid-header-py, 12px)',
        'fluid-header-px': 'var(--fluid-header-px, 24px)',
        'fluid-gap-xs': 'var(--fluid-gap-xs, 5px)',
      },
      fontFamily: {
        'almarai-regular': ['Almarai-Regular'],
        'almarai-bold': ['Almarai-Bold'],
      },
    },
  },
  plugins: [],
}