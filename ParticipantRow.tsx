import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";

type Status = "verified" | "verifying" | "denied";

interface Props {
  rank: number;
  name: string;
  points: number;
  status: Status;
  isCurrentUser?: boolean;
}

export function ParticipantRow({
  rank,
  name,
  points,
  status,
  isCurrentUser = false,
}: Props) {
  const icon =
    status === "verified"
      ? "checkmark-circle"
      : status === "verifying"
      ? "time-outline"
      : "close-circle";

  const iconColor =
    status === "verified"
      ? COLORS.green
      : status === "verifying"
      ? COLORS.primary
      : "red";

  return (
    <View
      style={[
        styles.row,
        isCurrentUser && { borderColor: COLORS.primary, borderWidth: 2 },
      ]}
    >
      <Text style={styles.rank}>{rank}</Text>

      <Text style={styles.name}>{name}</Text>

      <View style={styles.right}>
        <Text style={styles.points}>{points} pts</Text>
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  rank: {
    color: COLORS.white,
    fontWeight: "700",
    width: 32,
  },
  name: {
    color: COLORS.white,
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  points: {
    color: COLORS.white,
    fontWeight: "600",
  },
});
