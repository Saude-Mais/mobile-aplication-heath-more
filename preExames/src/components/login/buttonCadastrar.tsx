import { TouchableOpacity , View , Text } from "react-native";

import { SButtonCadastrar } from "styles/buttonLoginCadastrar";
const Style = SButtonCadastrar();

interface props {
    onPress: () => void;
}

export default function ButtonCadastrar({onPress}:props){
    return(
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={Style.text}>Quero me cadastrar</Text>
            </View>
        </TouchableOpacity>
    );
}