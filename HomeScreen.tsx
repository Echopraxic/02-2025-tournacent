import { View } from "react-native";
import { Card } from "../components/ui/Card";
import { OrdinalCard } from "../components/ui/OrdinalCard";
import { TaskItem } from "../components/task/TaskItem";
import { useTaskStore } from "../store/taskStore";

export default function HomeScreen() {
  const nextTask = useTaskStore((s) => s.nextTask());

  return (
    <View style={{ padding: 16 }}>
      <Card>{/* Challenge overview */}</Card>

      {nextTask && (
        <View style={{ marginTop: 12 }}>
          <TaskItem task={nextTask} />
        </View>
      )}

      <View style={{ marginTop: 12 }}>
        <OrdinalCard place={3} />
      </View>
    </View>
  );
}
