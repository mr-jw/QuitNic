import { Text, View, StyleSheet, TextInput } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your name</Text>
      <TextInput
        style={styles.text}
        placeholder="Enter your name"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
