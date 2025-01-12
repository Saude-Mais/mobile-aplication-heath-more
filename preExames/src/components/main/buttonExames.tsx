import { TouchableOpacity , View , Text } from "react-native";


//onPress}
import { getStyles } from "styles/buttonsMain";

const Style = getStyles();
interface props {
    onPress: () => void;
}

export default function ButtonExams({onPress}:props) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Resultados préliminar de exames</Text>
            </View>
        </TouchableOpacity>
    );
}