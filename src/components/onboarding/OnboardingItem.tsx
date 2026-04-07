import { OnboardingSlide } from "@/src/constants/onboarding";
import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RightArrow from "@/assets/icons/right_arrow.svg";
import LeftArrow from "@/assets/icons/left_arrow.svg";
import { useClickSound } from "@/src/hooks/use-sound";

interface Props {
  item: OnboardingSlide;
  onFinish: () => void;
  onNext: () => void;
  onPrev: () => void;
  isLast: boolean;
  isFirst: boolean;
}

const NavButton = ({
  direction,
  type,
  onPress,
}: {
  direction: "left" | "right";
  type: "primary" | "secondary";
  onPress: () => void;
}) => {
  const playSound = useClickSound();
  const isPrimary = type === "primary";
  const iconColor = isPrimary ? "white" : "#666";
  const handlePress = () => {
    playSound();
    onPress();
  };
  const Icon = direction === "right" ? RightArrow : LeftArrow;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      className="w-20 h-16  items-center justify-center"
    >
      <View className=" mb-2">
        <Icon width={100} height={100} fill={iconColor} />
      </View>
    </TouchableOpacity>
  );
};
const OnboardingItem = ({
  item,
  onFinish,
  onNext,
  onPrev,
  isLast,
  isFirst,
}: Props) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{ width }}
      className="flex-1 items-center justify-center gap-[32px] py-20 px-6 "
    >
      <View className="w-full  justify-center items-center">
        <Image source={item.image} resizeMode="contain" />
      </View>

      <View className="items-center ">
        <Text className="text-black text-2xl text-center font-almarai-bold">
          {item.title}
        </Text>
      </View>

      <View className="flex-row items-center justify-between w-full  px-10">
        {!isFirst ? (
          <NavButton direction="left" type="secondary" onPress={onPrev} />
        ) : (
          <View className="w-20" />
        )}

        <NavButton
          direction="right"
          type="primary"
          onPress={isLast ? onFinish : onNext}
        />
      </View>
    </View>
  );
};

export default OnboardingItem;
