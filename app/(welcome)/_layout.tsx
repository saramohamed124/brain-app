import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";

export default function WelcomeLayout() {
  useEffect(() => {
    // router.replace(ROUTES.GAME); // ⚠️ حذاري: لو سبتيها كدة هتعمل Infinite Loop
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
