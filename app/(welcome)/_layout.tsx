import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { ROUTES } from "@/src/constants/routes";

export default function WelcomeLayout() {
  const router = useRouter();

  useEffect(() => {
    // router.replace(ROUTES.GAME); // ⚠️ حذاري: لو سبتيها كدة هتعمل Infinite Loop
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
