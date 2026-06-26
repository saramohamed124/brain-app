import AnswerGrid from "@/src/components/game/AnswerGrid";
import LetterTitle from "@/src/components/game/LetterTitle";
import { View, useWindowDimensions } from "react-native";

export default function GameHome() {
  const { width } = useWindowDimensions();

  return (
    <View className=" bg-white" style={{ width }}>
      <LetterTitle />
      <AnswerGrid />
    </View>
  );
}
