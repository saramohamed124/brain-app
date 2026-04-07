import { store } from "@/src/store";
import {
  Almarai_300Light,
  Almarai_400Regular,
  Almarai_700Bold,
  Almarai_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/almarai";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "../global.css";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);
  const [loaded, error] = useFonts({
    AlmaraiLight: Almarai_300Light,
    AlmaraiRegular: Almarai_400Regular,
    AlmaraiBold: Almarai_700Bold,
    AlmaraiExtraBold: Almarai_800ExtraBold,
  });
  useEffect(() => {
    async function checkStatus() {
      try {
        const value = await AsyncStorage.getItem("hasSeenOnboarding");
        setIsFirstTime(value === null);
      } catch (e) {
        setIsFirstTime(false);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    checkStatus();
  }, []);

  useEffect(() => {
    if (loaded || error) {
      const { Text, TextInput } = require("react-native");
      // إجبار الأبلكيشن كله يستخدم الخط ده كافتراضي
      if (Text.defaultProps == null) Text.defaultProps = {};
      Text.defaultProps.style = { fontFamily: "AlmaraiRegular" };

      if (TextInput.defaultProps == null) TextInput.defaultProps = {};
      TextInput.defaultProps.style = { fontFamily: "AlmaraiRegular" };

      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (isFirstTime === null || (!loaded && !error)) {
    return null;
  }
  return (
    <Provider store={store}>
      <View className="flex-1 font-almarai">
        <Stack
          screenOptions={{
            headerShown: false,
            headerTitleStyle: { fontFamily: "Almarai-Bold" },
          }}
        >
          <Stack.Screen
            name="(welcome)"
            options={{
              redirect: isFirstTime === false,
            }}
          />
          <Stack.Screen
            name="(game)/index"
            options={{
              redirect: isFirstTime === true,
            }}
          />
        </Stack>
      </View>
    </Provider>
  );
}
