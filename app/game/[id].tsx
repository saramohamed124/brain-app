import { IconSymbol } from "@/src/components/ui/icon-symbol";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function GameScreen() {
  // بنجيب الـ id اللي هو رقم المستوى من الـ URL
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-sky-500 items-center justify-between py-10">
      {/* Header بسيط */}
      <View className="flex-row justify-between w-full px-6 items-center">
        <Text className="text-white text-2xl font-bold">لغز رقم {id}</Text>
        <View className="flex-row items-center bg-white/20 px-3 py-1 rounded-full">
          <IconSymbol name="dollarsign.circle.fill" size={20} color="#fbbf24" />
          <Text className="text-white font-bold ml-1">50</Text>
        </View>
      </View>

      {/* منطقة اللعب (سنضيف فيها المكونات لاحقاً) */}
      <View className="items-center">
        <Text className="text-white/70 italic mb-4">
          صورة اللغز ستظهر هنا...
        </Text>
        <View className="w-64 h-64 bg-white/10 rounded-3xl border-2 border-dashed border-white/30 items-center justify-center">
          <IconSymbol name="lightbulb.fill" size={50} color="white" />
        </View>
      </View>

      {/* زر للرجوع مؤقتاً */}
      <View className="w-full px-10">
        <Text className="text-center text-white/50 text-sm">
          ابدئي ببناء منطق اللعبة الآن!
        </Text>
      </View>
    </View>
  );
}
