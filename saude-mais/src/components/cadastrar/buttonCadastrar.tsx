import { TouchableOpacity , View , Text } from "react-native";

import { SButtonEntrar } from "styles/buttonLoginEntrar";


const Style = SButtonEntrar();
export default function ButtonCadastrar({onPress}) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Cadastrar</Text>
            </View>
        </TouchableOpacity>
    );
}