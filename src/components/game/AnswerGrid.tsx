import { Dimensions, View, Text } from "react-native";

const { width } = Dimensions.get("window");

// 🌟 Clear, reusable clamp helper
const clamp = (min: number, preferred: number, max: number) =>
  Math.min(Math.max(preferred, min), max);

export default function LetterTitle() {
  // Directly calculate fluid spaces for this specific screen component
  const dynamicStyles = {
    headerPaddingVertical: clamp(12, width * 0.04, 24), // clamp(12px, 4vw, 24px)
    headerPaddingHorizontal: clamp(16, width * 0.06, 40), // clamp(16px, 6vw, 40px)
  };

  return (
    <View
      className="bg-brand-surface flex flex-row-reverse items-center justify-between border-b border-brand-line"
      style={{
        paddingVertical: dynamicStyles.headerPaddingVertical,
        paddingHorizontal: dynamicStyles.headerPaddingHorizontal,
      }}
    >
      <Text className="font-almarai-bold text-lg text-brand-textDark">
        المجموعات
      </Text>
    </View>
  );
}
