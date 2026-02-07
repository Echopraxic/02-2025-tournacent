import { View, StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export function ProgressBar({ progress }: { progress: number }) {
  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${progress * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 10,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 12,
  },
  fill: {
    height: "100%",
    backgroundColor: COLORS.green,
  },
});
