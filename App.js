import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return `#${color}`;
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setBackgroundColor(randomColor);
      }}
    >
      <View
        style={[styles.container, { backgroundColor }]}
        className={styles.container}
      >
        <Text>Hello There</Text>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
