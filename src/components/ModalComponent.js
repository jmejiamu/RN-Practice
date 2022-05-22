import React from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";

const ModalComponent = ({
  modalVisiable,
  itemSeleted,
  onHandleDelete,
  setModalVisiable,
}) => {
  return (
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button title="OK" onPress={() => onHandleDelete(itemSeleted)} />
          <Button
            title="Cancel"
            onPress={() => setModalVisiable(!modalVisiable)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    marginTop: 60,
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 10,
  },
  modalMessage: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
