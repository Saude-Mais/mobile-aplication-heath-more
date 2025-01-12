import { TouchableOpacity , View , Text } from "react-native";

import { SButtonGetImageDocument } from "styles/buttonGetImageDocument";

const Style = SButtonGetImageDocument();

interface props {
    onPress: () => void;
}
export default function ButtonGetImage({onPress}: props) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Selecionar {"\n "} Imagem</Text>
            </View>
        </TouchableOpacity>
    );
}