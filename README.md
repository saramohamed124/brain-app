# 🧠 Brain Game - Interactive Onboarding Experience 🎮

Welcome to the **Brain Game** mobile application! This project is a high-performance educational game built with **React Native** and **Expo**, focusing on a premium user experience and smooth interactive elements.

---

## 🚀 Recent Feature: Interactive Onboarding
In the latest `feature/onboarding` branch, I implemented a fully custom onboarding experience that bridges the gap between design and functionality, ensuring a high-quality "First Time User Experience" (FTUE).

### ✨ Key Implementation Details:
* **3D UI Components:** Custom-built navigation buttons with a 3D tactile effect using `react-native-svg`.
* **SVG Integration:** Seamlessly integrated complex assets from Figma using `react-native-svg-transformer` for crisp, scalable graphics.
* **Audio Interaction:** Added satisfying click sound effects using `expo-audio` to enhance user engagement and game-feel.
* **Smooth Navigation:** Integrated with `expo-router` for declarative routing between onboarding slides.
* **Responsive Layout:** Leveraged **NativeWind (Tailwind CSS)** to ensure the UI is consistent across different screen sizes.

---

## 🛠️ Technical Stack
* **Framework:** [Expo](https://expo.dev/) (SDK 54)
* **Styling:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
* **Graphics:** SVG Assets with custom Transformer
* **State Management:** Redux Toolkit
* **Storage:** AsyncStorage (for onboarding persistence)
* **Typography:** Almarai (via Expo Google Fonts)

---

## 🎬 Interaction Demo

<p align="center">
  <img src="./assets/screenshots/demo.mp4" width="300" alt="Onboarding Demo">
</p>

## 🏗️ Project Structure (Onboarding Related)
```bash
src/
├── components/
│   └── onboarding/
│       └── OnboardingItem.tsx  # Main slide component & 3D logic
├── hooks/
│   └── use-sound.ts            # Custom hook for optimized audio effects
assets/
├── icons/                      # SVG assets exported from Figma
└── sounds/                     # Interactive game sound effects (wav/mp3)