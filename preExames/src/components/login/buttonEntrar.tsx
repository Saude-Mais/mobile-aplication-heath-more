import { TouchableOpacity , View , Text } from "react-native";

import { SButtonEntrar } from "styles/buttonLoginEntrar";


const Style = SButtonEntrar();
interface props {
    onPress: () => void;
}

export default function ButtonEntrar({onPress}:props) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Entrar</Text>
            </View>
        </TouchableOpacity>
    );
}