import React from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import LockIcon from "@/assets/icons/lock.svg";
import RightArrow from "@/assets/icons/right_arrow.svg";
import StarGoldIcon from "@/assets/icons/star_gold.svg";
const { height: screenHeight } = Dimensions.get("window");

interface GroupItem {
  id: string;
  title: string;
  score: string;
  isLocked: boolean;
}

const GROUPS_DATA: GroupItem[] = [
  { id: "1", title: "المجموعة الأولى", score: "1/24", isLocked: false },
  { id: "2", title: "المجموعة الثانية", score: "0/24", isLocked: true },
  { id: "3", title: "المجموعة الثالثة", score: "0/24", isLocked: true },
  { id: "4", title: "المجموعة الرابعة", score: "0/24", isLocked: true },
  { id: "5", title: "المجموعة الخامسة", score: "0/24", isLocked: true },
  { id: "6", title: "المجموعة السادسة", score: "0/24", isLocked: true },
  { id: "7", title: "المجموعة السابعة", score: "0/24", isLocked: true },
  { id: "8", title: "المجموعة الثامنة", score: "0/24", isLocked: true },
  { id: "9", title: "المجموعة التاسعة", score: "0/24", isLocked: true },
];

// 🌟 SENIOR CLEAN CODE LOOKUP PATTERNS
// Modifying these semantic class definitions changes your whole app layout at once.
const rowStyles = {
  base: "flex flex-row items-center justify-between border rounded-lg px-fluid-row-px py-fluid-row-py transition-all",
  active: "border-brand-primary bg-brand-lightBg",
  locked: "border-game-lockedBorder bg-game-lockedBg opacity-80",
};

const textStyles = {
  titleActive: "text-base font-almarai-bold text-game-textMain",
  titleLocked: "text-base font-almarai-bold text-game-textMuted",
  score: "text-xs font-almarai-regular text-game-textMain mt-1",
};

const GroupRow = ({
  item,
  onPress,
}: {
  item: GroupItem;
  onPress: () => void;
}) => {
  const { title, score, isLocked } = item;

  return (
    <TouchableOpacity
      activeOpacity={isLocked ? 1 : 0.7}
      disabled={isLocked}
      onPress={onPress}
      className={`${rowStyles.base} ${isLocked ? rowStyles.locked : rowStyles.active}`}
    >
      {/* Score Section */}
      <View className="items-center justify-center">
        <StarGoldIcon width={22} height={22} />
        <Text className={textStyles.score}>{score}</Text>
      </View>

      {/* Title Section */}
      <Text
        className={isLocked ? textStyles.titleLocked : textStyles.titleActive}
      >
        {title}
      </Text>

      {/* Status Icon */}
      <View className="w-6 h-6 items-center justify-center">
        {isLocked ? (
          <LockIcon width={20} height={20} />
        ) : (
          <RightArrow width={20} height={20} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default function AnswerGrid() {
  return (
    <ScrollView
      style={{ maxHeight: screenHeight }}
      className="bg-white  "
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 120,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex flex-col gap-fluid-gap">
        {GROUPS_DATA.map((group) => (
          <GroupRow
            key={group.id}
            item={group}
            onPress={() => console.log(group.title)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
