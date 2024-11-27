import { Tabs } from "expo-router";
import "../../global.css";
import { Home, ChartLineIcon } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: () => <Home color='blue' />,
        }}
      />
      <Tabs.Screen
        name='dashboard'
        options={{
          title: "Dashboard",
          tabBarIcon: () => <ChartLineIcon color='blue' />,
        }}
      />
    </Tabs>
  );
}
