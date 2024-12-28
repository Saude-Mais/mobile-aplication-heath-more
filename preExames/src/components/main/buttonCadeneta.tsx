import { TouchableOpacity , View , Text } from "react-native";


//onPress}
import { getStyles } from "styles/buttonsMain";

const Style = getStyles();
export default function ButtonCardeneta({onPress}) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Login</Text>
            </View>
        </TouchableOpacity>
    );
}