import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
const RenderItems = ({ item, handleModal }) => {
  return (
    <View key={`task-${item.id}`} style={styles.containerItem}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => handleModal(item.id)}
      >
        <Text style={styles.deleteBtn}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderItems;

const styles = StyleSheet.create({
  containerItem: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    fontSize: 14,
    color: "#212121",
  },
  btnContainer: {
    backgroundColor: "#8CBCB9",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  deleteBtn: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
