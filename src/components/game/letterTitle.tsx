import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Href, router } from "expo-router";

// Asset Imports
import StarGoldIcon from "@/assets/icons/star_gold.svg";
import LeftArrow from "@/assets/icons/left_arrow.svg";
import { useClickSound } from "@/src/hooks/use-sound";

// ==========================================
// 🌟 THE SINGLE PLACE TO EDIT ALL STYLES (Design Tokens)
// ==========================================
const styles = {
  // Uses fluid spacings and semantic background/border theme variables
  headerContainer:
    "bg-brand-surface mt-fluid-header-mt py-fluid-header-py px-fluid-header-px flex flex-row-reverse border-b border-brand-line items-center justify-between",

  // Score Section with fluid gap
  scoreWrapper: "flex flex-row items-center justify-center gap-fluid-gap-xs",
  scoreText: "font-almarai-regular text-base text-brand-textMuted",

  // Center Title
  mainTitle: "font-almarai-bold text-lg text-brand-textDark",

  // Navigation Section
  backActionWrapper: "flex-row items-center",
  backButton: "p-4 items-center justify-center",
  backText: "font-almarai-regular text-base text-brand-textMuted",
};

export default function LetterTitle() {
  const playSound = useClickSound();

  const handlePress = () => {
    playSound();
    router.replace("/(welcome)" as Href);
  };

  return (
    <View className={styles.headerContainer}>
      {/* Stars Score Section */}
      <View className={styles.scoreWrapper}>
        <Text className={styles.scoreText}>2</Text>
        <StarGoldIcon width={24} height={24} />
      </View>

      {/* Main Page Header */}
      <Text className={styles.mainTitle}>المجموعات</Text>

      {/* Back Button Action Link */}
      <View className={styles.backActionWrapper}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handlePress}
          className={styles.backButton}
        >
          <LeftArrow width={30} height={16} />
        </TouchableOpacity>
        <Text className={styles.backText}>رجوع</Text>
      </View>
    </View>
  );
}
