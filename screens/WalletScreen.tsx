import { Text, View } from "react-native";
import { Card } from "../components/ui/Card";
import { useChallengeStore } from "../store/challengeStore";

export default function WalletScreen() {
  const { verificationStatus } = useChallengeStore();

  return (
    <View style={{ padding: 16 }}>
      <Card>
        <Text style={{ color: "white", fontSize: 16 }}>
          Verification: {verificationStatus}
        </Text>
        <Text style={{ color: "white", marginTop: 8 }}>
          Connect bank to verify purchases
        </Text>
      </Card>
    </View>
  );
}
