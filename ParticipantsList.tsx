import { FlatList } from "react-native";
import { ParticipantRow } from "./ParticipantRow";

const MOCK_PARTICIPANTS = [
  {
    id: "1",
    name: "Alex",
    points: 55,
    status: "verified",
  },
  {
    id: "2",
    name: "Jordan",
    points: 45,
    status: "verified",
  },
  {
    id: "3",
    name: "You",
    points: 35,
    status: "verifying",
    isCurrentUser: true,
  },
  {
    id: "4",
    name: "Sam",
    points: 30,
    status: "denied",
  },
];

export function ParticipantsList() {
  const sorted = [...MOCK_PARTICIPANTS].sort(
    (a, b) => b.points - a.points
  );

  return (
    <FlatList
      data={sorted}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <ParticipantRow
          rank={index + 1}
          name={item.name}
          points={item.points}
          status={item.status as any}
          isCurrentUser={item.isCurrentUser}
        />
      )}
    />
  );
}
