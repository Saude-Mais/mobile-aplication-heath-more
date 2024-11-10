import { TouchableOpacity , View , Text } from "react-native";

import { getStyles } from "styles/buttonsMain";

const Style = getStyles();

export default function ButtonTuberculose({onPress}) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Raio-X Tuberculose</Text>
            </View>
        </TouchableOpacity>
    );
}