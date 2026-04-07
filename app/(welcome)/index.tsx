import { ONBOARDING_DATA } from "@/src/constants/onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Href, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Animated, FlatList, Image, View } from "react-native";
import OnboardingItem from "../../src/components/onboarding/OnboardingItem";
export const Images = {
  puzzleYellow: require("@/assets/images/background/puzzle_yellow.png"),
  puzzleBlue: require("@/assets/images/background/puzzle_blue.png"),
};
export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const router = useRouter();

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleGetStarted = async () => {
    try {
      await AsyncStorage.setItem("hasSeenOnboarding", "true");
      router.replace("/(game)" as Href);
    } catch (error) {
      console.error("Error saving onboarding status:", error);
    }
  };

  return (
    <View className="flex-1 font-almarai">
      <View className="absolute top-0 left-0 z-10">
        <Image source={Images.puzzleYellow} resizeMode="contain" />
      </View>
      <View className="absolute top-0 right-0 z-10">
        <Image source={Images.puzzleBlue} resizeMode="contain" />
      </View>
      <View className="flex-1">
        <FlatList
          data={ONBOARDING_DATA}
          renderItem={({ item, index }) => (
            <OnboardingItem
              item={item}
              isFirst={index === 0}
              isLast={index === ONBOARDING_DATA.length - 1}
              onNext={() =>
                slidesRef.current?.scrollToIndex({ index: index + 1 })
              }
              onPrev={() =>
                slidesRef.current?.scrollToIndex({ index: index - 1 })
              }
              onFinish={handleGetStarted}
            />
          )}
          horizontal
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
