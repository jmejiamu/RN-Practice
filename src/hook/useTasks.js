import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import RenderItems from "../components/ListItem/ItemList";
const useTasks = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisiable, setModalVisiable] = useState(false);
  const [itemSeleted, setItemSeleted] = useState();

  const onHandleInput = (text) => {
    setTask(text);
  };

  const onHandleSubmit = () => {
    setTask("");
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random(), value: task },
    ]);
  };

  const ListHeaderComponent = () => {
    return tasks.length > 0 && <Text style={styles.titleList}>Task List</Text>;
  };
  const onHandleDelete = (itemSeleted) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== itemSeleted.id)
    );
    setItemSeleted({});
    setModalVisiable(!modalVisiable);
  };

  const handleModal = (id) => {
    setItemSeleted(tasks.filter((item) => item.id === id)[0]);
    setModalVisiable(!modalVisiable);
  };

  const renderItems = ({ item }) => {
    return <RenderItems item={item} handleModal={handleModal} />;
  };

  return {
    onHandleInput,
    onHandleSubmit,
    ListHeaderComponent,
    onHandleDelete,
    renderItems,
    task,
    tasks,
    modalVisiable,
    itemSeleted,
    setModalVisiable,
  };
};
export default useTasks;
const styles = StyleSheet.create({
  titleList: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 18,
    color: "#212121",
  },
});
