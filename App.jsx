import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF9D9",
    padding: 20,
    justifyContent: "center",
  },
});
