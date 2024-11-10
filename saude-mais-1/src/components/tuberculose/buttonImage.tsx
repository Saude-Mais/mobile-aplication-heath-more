import { TouchableOpacity , View , Text } from "react-native";

import { SButtonGetImage } from "styles/buttonGetImage";

const Style = SButtonGetImage();

export default function ButtonGetImage({onPress}) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Selecionar raio X</Text>
            </View>
        </TouchableOpacity>
    );
}