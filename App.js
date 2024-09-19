import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.parrafo}>
        Hola esta es mi primer Aplicacion Movil!
      </Text>
      <Text style={styles.parrafo}>Hola Coder!</Text>
      <Button title="Presioname" onPress={() => alert("Hola Coder!")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#86D293",
    alignItems: "center",
    justifyContent: "center",
  },

  parrafo: {
    color: "#000",
    fontSize: 20,
  },
});
