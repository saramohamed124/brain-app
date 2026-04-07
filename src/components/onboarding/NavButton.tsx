import LeftArrow from "@/assets/icons/left_arrow.svg";
import RightArrow from "@/assets/icons/right_arrow.svg";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const NavButton = ({
  direction,
  type,
  onPress,
}: {
  direction: "left" | "right";
  type: "primary" | "secondary";
  onPress: () => void;
}) => {
  const isPrimary = type === "primary";
  const mainColor = isPrimary ? "#23A6FE" : "#E6E6E6";
  const shadowColor = isPrimary ? "#1a7dc2" : "#b3b3b3";
  const iconColor = isPrimary ? "white" : "#666";

  const Icon = direction === "right" ? RightArrow : LeftArrow;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View className="mb-2">
        <Icon width={28} height={28} fill={iconColor} />
      </View>
    </TouchableOpacity>
  );
};
