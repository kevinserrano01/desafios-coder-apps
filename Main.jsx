import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tareas from "./tareas.json";

export function Main() {
  const insets = useSafeAreaInsets();

  const completarTarea = (idTarea) => {
    // implementar la lógica para marcar una tarea como completada
    alert("Tarea completada");
  };

  const eliminarTarea = (idTarea) => {
    // implementar la lógica para eliminar una tarea
    alert("Tarea eliminada");
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskItem}>
      <Text
        style={[
          styles.taskText,
          item.completada === "True" ? styles.completedTask : null,
        ]}
      >
        {item.descripcion}
      </Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity
          onPress={() => completarTarea(item.id)}
          style={styles.completeButton}
        >
          <Ionicons name="checkmark" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => eliminarTarea(item.id)}
          style={styles.deleteButton}
        >
          <Ionicons name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text style={styles.title}>Lista de Tareas</Text>
      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="Agregar tarea..." />
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tareas}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
        style={styles.taskList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "#5cb85c",
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  taskList: {
    marginTop: 20,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  taskButtons: {
    flexDirection: "row",
  },
  completeButton: {
    backgroundColor: "#5cb85c",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: "#d9534f",
    padding: 10,
    borderRadius: 8,
  },
});
