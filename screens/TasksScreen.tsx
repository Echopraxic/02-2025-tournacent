import { View, FlatList } from "react-native";
import { TaskItem } from "../components/task/TaskItem";
import { useTaskStore } from "../store/taskStore";

export default function TasksScreen() {
  const { tasks, completeTask } = useTaskStore();

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={tasks}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onComplete={() => completeTask(item.id)} />
        )}
      />
    </View>
  );
}
