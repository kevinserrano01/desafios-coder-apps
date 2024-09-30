import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tareas from "./tareas.json";
import { useState } from "react";

export function Main() {
  const insets = useSafeAreaInsets();
  const [taskInput, setTaskInput] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});

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

  console.log("Tareas", tasksList)
  
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text style={styles.title}>Lista de Tareas</Text>
      <View style={styles.inputRow}>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => {setTaskInput(text)}}
          value={taskInput}
          placeholder="Agregar tarea..." />
        <TouchableOpacity 
          onPress={() => crearTarea()}
          style={styles.addButton}>
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tareas}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
        style={styles.taskList}
      />

      <Modal
        animationType="fade"
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.textsContainer}>
            <Text style={styles.modalTitle}>Confirmar eliminación</Text>
            <Text style={styles.modalText}>Tarea de prueba</Text>
            <Text style={styles.modalDeleteTextwarning}>
              Esta acción no se puede deshacer
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={styles.cancelBtn}
              onPress={closeModal}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </Pressable>
            <Pressable
            style={styles.deleteBtn}
              onPress={hanleDeleteTask}
            >
              <Text style={styles.deleteText}>Si, eliminar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalDeleteTextwarning: {
    fontSize: 14,
    color: 'red',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  cancelBtn: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    width: '45%',
  },
  cancelText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  },
  deleteBtn: {
    backgroundColor: '#ff5c5c',
    padding: 10,
    borderRadius: 15,
    width: '45%',
  },
  deleteText: {
    backgroundColor: '#ff5c5c',
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
