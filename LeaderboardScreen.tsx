import { Text, View } from "react-native";
import { OrdinalCard } from "../components/ui/OrdinalCard";
import { ProgressBar } from "../components/ui/ProgressBar";
import { useChallengeStore } from "../store/challengeStore";
import { useTaskStore } from "../store/taskStore";

export default function LeaderboardScreen() {
  const points = useChallengeStore((s) => s.getVerifiedPoints());
  const tasks = useTaskStore((s) => s.tasks);

  const progress =
    tasks.filter((t) => t.status === "verified").length / tasks.length;

  return (
    <View style={{ padding: 16 }}>
      <OrdinalCard place={3} />

      <Text style={{ color: "white", fontSize: 36 }}>{points} pts</Text>

      <ProgressBar progress={progress} />

      {/* participant list next */}
    </View>
  );
}
