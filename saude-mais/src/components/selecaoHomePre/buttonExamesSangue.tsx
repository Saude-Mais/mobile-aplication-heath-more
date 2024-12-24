import { TouchableOpacity , View , Text } from "react-native";

import { getStyles } from "styles/buttonsMain";

const Style = getStyles();

export default function ButtonPreExamesSangue({onPress}) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Resultado Pré liminar de Sangue</Text>
            </View>
        </TouchableOpacity>
    );
}