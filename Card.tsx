import { View, StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export function Card({ children, style }: any) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    padding: 16,
  },
});
