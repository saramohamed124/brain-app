import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { OpaqueColorValue, StyleProp, TextStyle } from "react-native"; // غيرنا ViewStyle لـ TextStyle

// الخريطة التي تربط أسماء أيقونات Apple بأيقونات Android
const MAPPING = {
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
  "lightbulb.fill": "lightbulb",
  "dollarsign.circle.fill": "monetization-on",
} as const;

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>; // التعديل هنا: TextStyle بدل ViewStyle
}) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}
