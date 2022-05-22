import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

const AddItem = ({ task, onHandleInput, onHandleSubmit }) => {
  return (
    <View style={styles.containerTask}>
      <TextInput
        style={styles.textInput}
        placeholder="Add new task"
        value={task}
        onChangeText={(text) => onHandleInput(text)}
      />
      <Button
        title="ADD"
        color="red"
        onPress={onHandleSubmit}
        disabled={task?.length === 0}
      />
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  containerTask: {
    marginTop: 40,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderColor: "red",
    borderBottomWidth: 1,
    width: "60%",
    height: 40,
    fontSize: 14,
    color: "red",
  },
});
