import { View, Text } from "react-native";
import { OrdinalCard } from "../components/ui/OrdinalCard";
import { ProgressBar } from "../components/ui/ProgressBar";
import { ParticipantsList } from "../components/leaderboard/ParticipantsList";
import { COLORS } from "../theme";

export default function LeaderboardScreen() {
  return (
    <View style={{ padding: 16, flex: 1 }}>
      <OrdinalCard place={3} />

      <Text
        style={{
          color: COLORS.white,
          fontSize: 36,
          fontWeight: "700",
          marginVertical: 16,
        }}
      >
        35 pts
      </Text>

      <ProgressBar progress={0.6} />

      <ParticipantsList />
    </View>
  );
}
