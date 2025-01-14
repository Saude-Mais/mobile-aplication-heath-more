import { Modal, ScrollView, TouchableOpacity, View, Text } from "react-native";


// Style
import { SComponentMMH } from "styles/compenentModalHistorico";

const Style = SComponentMMH();

interface props {
    visible: boolean;
    item: {
      tipo : string;
      texto: string;
      data : object;
    };
    onClose: () => void;
  }
  

export default function ModalHistorico({visible, item, onClose}:props){
    return(
        <Modal style={Style.modal} animationType='slide' transparent={true} visible={visible} onRequestClose={onClose}>
            <View style={{alignItems:'center'}}>
                <View style={Style.viewMain}>
                    <ScrollView  style={{width:"90%"}}>
                            <Text style={Style.textScrollTitle}>{item.tipo}</Text>
                            <Text style={Style.textScrollTexto}>{item.texto}</Text>
                    </ScrollView>
                    
                    <TouchableOpacity onPress={onClose} style={Style.touch}>
                        <View>
                                <Text style={Style.touchText}>Fechar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
