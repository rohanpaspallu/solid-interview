import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  FlatList,
} from "react-native";
import { AppStyles as styles } from "./AppStyles";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [oldColors, setOldColors] = useState([]);

  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return `#${color}`;
  };

  const handlePress = () => {
    const newColor = randomColor();
    setBackgroundColor(newColor);
    setOldColors((prevColors) => [newColor, ...prevColors.slice(0, 3)]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, { backgroundColor }]}>
        <View style={styles.centeredContent}>
          <Text style={styles.title}>Hello There</Text>
        </View>
        <FlatList
          data={oldColors}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={[styles.colorItem, { backgroundColor: item }]}>
              <Text style={styles.colorText}>{item}</Text>
            </View>
          )}
          style={styles.colorList}
          contentContainerStyle={styles.colorListContent}
        />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}
