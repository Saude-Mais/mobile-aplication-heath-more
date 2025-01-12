import { TouchableOpacity , View , Text } from "react-native";

import { SButtonEnviarFoto } from "styles/buttonEnviarFoto";


const Style = SButtonEnviarFoto();

interface props{
    onPress: () => void;
}
export default function ButtonEnviarFoto({onPress}:props) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Enviar</Text>
            </View>
        </TouchableOpacity>
    );
}