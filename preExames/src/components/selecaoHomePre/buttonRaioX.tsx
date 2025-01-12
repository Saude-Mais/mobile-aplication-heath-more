import { TouchableOpacity , View , Text } from "react-native";

import { getStyles } from "styles/buttonsMain";

const Style = getStyles();
interface props {
    onPress: () => void;
}
export default function ButtonRaioX({onPress}:props) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Classificação Raio X</Text>
            </View>
        </TouchableOpacity>
    );
}