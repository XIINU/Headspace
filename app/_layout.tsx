import "../global.css";
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Meditations",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
