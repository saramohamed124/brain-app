import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function RootIndex() {
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkStatus() {
      const value = await AsyncStorage.getItem("hasSeenOnboarding");
      setIsFirstTime(value === null);
    }
    checkStatus();
  }, []);

  if (isFirstTime === null) return null;

  return <Redirect href={isFirstTime ? "/(welcome)" : "/(game)"} />;
}
