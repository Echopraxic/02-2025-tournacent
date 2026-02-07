import { Text, StyleSheet } from "react-native";
import { Card } from "./Card";
import { COLORS } from "../../theme";

export function OrdinalCard({ place }: { place: number }) {
  const suffix =
    place === 1 ? "st" : place === 2 ? "nd" : place === 3 ? "rd" : "th";

  return (
    <Card style={styles.card}>
      <Text style={styles.text}>
        You’re in {place}
        {suffix} place
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
});
