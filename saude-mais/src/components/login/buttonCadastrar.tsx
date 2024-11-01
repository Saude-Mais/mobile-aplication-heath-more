import { TouchableOpacity , View , Text } from "react-native";

import { SButtonCadastrar } from "styles/buttonLoginCadastrar";

const Style = SButtonCadastrar();
export default function ButtonCadastrar({onPress})
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={Style.text}>Quero me cadastrar</Text>
            </View>
        </TouchableOpacity>
    );
}