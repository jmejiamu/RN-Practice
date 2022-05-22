import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import AddItem from "./src/components/AddItem";
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
      <AddItem
        onHandleInput={onHandleInput}
        onHandleSubmit={onHandleSubmit}
        task={task}
      />
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
    </View>
  );
};

const styles = StyleSheet.create({
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
