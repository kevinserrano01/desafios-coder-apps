// rnfes
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'

const DeleteModal = ({modalVisibleDown, taskSelectedDown, hanleDeleteTaskUp, closeModalUp}) => {
  return (
    <Modal
        animationType="fade"
        visible={modalVisibleDown}
      >
        <View style={styles.modalContainer}>
          <View style={styles.textsContainer}>
            <Text style={styles.modalTitle}>Confirmar eliminación</Text>
            <Text style={styles.modalText}>{taskSelectedDown.descripcion}</Text>
            <Text style={styles.modalDeleteTextwarning}>
              Esta acción no se puede deshacer
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={styles.cancelBtn}
              onPress={closeModalUp}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </Pressable>
            <Pressable
            style={styles.deleteBtn}
              onPress={hanleDeleteTaskUp}
            >
              <Text style={styles.deleteText}>Si, eliminar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  )
}

export default DeleteModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      textsContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalText: {
        fontSize: 16,
        marginBottom: 10,
      },
      modalDeleteTextwarning: {
        fontSize: 14,
        color: 'red',
        marginBottom: 20,
      },
      buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20,
      },
      cancelBtn: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 15,
        width: '45%',
      },
      cancelText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10,
        textAlign: 'center',
      },
      deleteBtn: {
        backgroundColor: '#ff5c5c',
        padding: 10,
        borderRadius: 15,
        width: '45%',
      },
      deleteText: {
        backgroundColor: '#ff5c5c',
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
      },
})