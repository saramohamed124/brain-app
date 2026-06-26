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
          primary: "#0287C3",
          secondary: "#0B98D8",
          lightBg: "#D9F2FD",
        },
        game: {
          lockedBg: "#F3F4F6",
          bgGrayHeader:"#F5F5F5",
          lockedBorder: "#C5C5C5",
          textMain: "#111827",
          textMuted: "#9CA3AF",
        }
      },
      // 2. Pure Tailwind Custom Extracted Spacing Keys (Safe for Node compiler)
      spacing: {
        'fluid-header-mt': 'var(--fluid-header-mt, 30px)',
        'fluid-header-py': 'var(--fluid-header-py, 12px)',
        'fluid-header-px': 'var(--fluid-header-px, 24px)',
        'fluid-gap-xs': 'var(--fluid-gap-xs, 5px)',
        'fluid-container-py': 'var(--fluid-container-py, 28px)', 
        'fluid-container-px': 'var(--fluid-container-px, 16px)', 
        'fluid-row-py': 'var(--fluid-row-py, 12px)',
        'fluid-row-px': 'var(--fluid-row-px, 32px)',
        'fluid-gap': 'var(--fluid-gap, 16px)',
      },
      fontFamily: {
        'almarai-regular': ['Almarai-Regular'],
        'almarai-bold': ['Almarai-Bold'],
      },
    },
  },
  plugins: [],
}