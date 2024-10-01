import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

const TaskInput = ({taskInput, setTaskInput, crearTarea}) => {
  return (
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
  )
}

export default TaskInput

const styles = StyleSheet.create({
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
})