import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import ModalComponent from "./src/components/ModalComponent";
import { themes } from "./src/constant/themes";
import useTasks from "./src/hook/useTasks";

const App = () => {
  const {
    ListHeaderComponent,
    renderItems,
    onHandleDelete,
    onHandleInput,
    onHandleSubmit,
    task,
    tasks,
    modalVisiable,
    itemSeleted,
    setModalVisiable,
  } = useTasks();

  return (
    <View style={themes.container}>
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
          disabled={task.length === 0}
        />
      </View>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={tasks}
        renderItem={renderItems}
        keyExtractor={(task) => task.id.toString()}
        style={styles.containerList}
      />
      <ModalComponent
        modalVisiable={modalVisiable}
        itemSeleted={itemSeleted}
        onHandleDelete={onHandleDelete}
        setModalVisiable={setModalVisiable}
      />
      {/* 
      <Modal
        animationType="slice"
        visible={modalVisiable}
        onRequestClose={() => null}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Delete Item</Text>
          </View>
          <Text style={styles.modalText}>Are you sure?</Text>
          <Text style={styles.modalMessage}>{itemSeleted?.value}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button title="OK" onPress={() => onHandleDelete(itemSeleted)} />
            <Button
              title="Cancel"
              onPress={() => setModalVisiable(!modalVisiable)}
            />
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

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
  containerList: {
    marginHorizontal: 20,
  },

  titleList: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 18,
    color: "#212121",
  },
  deleteButton: {
    backgroundColor: "#8CBCB9",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  deleteButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default App;
