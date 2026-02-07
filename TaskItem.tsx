import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";

export function TaskItem({ task, onPress }: any) {
  const color =
    task.status === "verified"
      ? COLORS.green
      : COLORS.secondary;

  return (
    <Pressable style={[styles.card, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.meta}>{task.points} pts</Text>

      {task.status === "verifying" && (
        <Ionicons name="time-outline" size={20} color="white" />
      )}
      {task.status === "verified" && (
        <Ionicons name="checkmark-circle" size={20} color="white" />
      )}
      {task.status === "denied" && (
        <Ionicons name="close-circle" size={20} color="white" />
      )}
    </Pressable>
  );
}
