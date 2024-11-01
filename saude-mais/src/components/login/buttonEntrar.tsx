import { TouchableOpacity , View , Text } from "react-native";

import { SButtonEntrar } from "styles/buttonLoginEntrar";


const Style = SButtonEntrar();
export default function ButtonEntrar({onPress}) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Entrar</Text>
            </View>
        </TouchableOpacity>
    );
}