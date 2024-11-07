import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#000",
  },
  colorList: {
    flex: 1,
  },
  colorListContent: {
    paddingTop: 20,
    alignItems: "center",
  },
  colorItem: {
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
    width: "80%",
  },
  colorText: {
    color: "#fff",
  },
});
