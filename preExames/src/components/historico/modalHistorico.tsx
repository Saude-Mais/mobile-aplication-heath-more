import { useState } from "react";
import { Modal, ScrollView, TouchableOpacity, View, Text } from "react-native";


// Style
import { SComponentMMH } from "styles/compenentModalHistorico";

const Style = SComponentMMH();
export default function ModalHistorico({visible, item, onClose}:any){


    return(
        <Modal animationType='slide' visible={visible} onRequestClose={onClose}>
            <View style={Style.viewMain}>
                <View>
                    <ScrollView>
                        <Text>{item.tipo}</Text>
                        <Text>{item.texto}</Text>
                    </ScrollView>
                </View>
                <TouchableOpacity onPress={onClose}>
                    <View>
                        <Text>Fechar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
