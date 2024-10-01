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
import { useEffect, useState } from "react";
import DeleteModal from "./components/DeleteModal";
import TaskInput from "./components/TaskInput";

export function Main() {
  const insets = useSafeAreaInsets();
  const [taskInput, setTaskInput] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});

  // Convencion a fines didacticos
  // uso el sufijo "Down" para las props que van padre a hijo 
  // y el sufijo "Up" para las props que van de hijo a padre

  const closeModal = () => {
    setModalVisible(false);
  };

  const crearTarea = () => {
    if (taskInput === "") {
      return;
    }
    setTasksList(prevState => [...prevState, taskInput]);
    setTaskInput("");
  };

  const completarTarea = (idTarea) => {
    // implementar la lógica para marcar una tarea como completada
    alert("Tarea completada");
  };

  const hanleDeleteTask = () => {
    // eliminar tarea del archivo JSON
    setTasksList(tasksList.filter((task) => task.id !== taskSelected.id));
    setModalVisible(false);
  };

  const handleSelectedTask = (item) => {
    setTaskSelected(item);
    setModalVisible(true);
  };

  // Cuando se actualiza el taskList se ejecuta el useEffect
  useEffect(() => {
    console.log("Tareas", tasksList)
  }, [tasksList])
  
  

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
          onPress={() => handleSelectedTask(item)}
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
      <TaskInput 
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        crearTarea={crearTarea}
      />
      <FlatList
        data={tareas}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
        style={styles.taskList}
      />

      {/* Modal */}
      <DeleteModal 
        modalVisibleDown={modalVisible}
        taskSelectedDown={taskSelected}
        hanleDeleteTaskUp={hanleDeleteTask}
        closeModalUp={closeModal}
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
    marginTop: 70,
  },
  taskList: {
    marginTop: 20,
    marginBottom: 60,
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
