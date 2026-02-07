import { useState } from "react";
import { View } from "react-native";
import BottomTabBar from "./components/navigation/BottomTabBar";
import HomeScreen from "./screens/HomeScreen";
import TasksScreen from "./screens/TasksScreen";
import WalletScreen from "./screens/WalletScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";

export default function App() {
  const [tab, setTab] = useState("Home");

  const renderScreen = () => {
    switch (tab) {
      case "Tasks":
        return <TasksScreen />;
      case "Wallet":
        return <WalletScreen />;
      case "Leaderboard":
        return <LeaderboardScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>{renderScreen()}</View>
      <BottomTabBar activeTab={tab} onTabPress={setTab} />
    </View>
  );
}
