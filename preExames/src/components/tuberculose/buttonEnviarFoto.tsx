import { TouchableOpacity , View , Text } from "react-native";

import { SButtonEnviarFoto } from "styles/buttonEnviarFoto";


const Style = SButtonEnviarFoto();

export default function ButtonEnviarFoto({onPress}) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Enviar Foto</Text>
            </View>
        </TouchableOpacity>
    );
}