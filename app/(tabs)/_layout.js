import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, }}>
          <Tabs.Screen name="discover" options={{ title: "Discover" }} />
          <Tabs.Screen name="browse" options={{ title: "Browse" }} />
          <Tabs.Screen name="favorites" options={{ title: "Favorites" }} />
          <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>

      );
}