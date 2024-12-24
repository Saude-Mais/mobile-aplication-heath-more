import { TouchableOpacity , View , Text } from "react-native";

import { SButtonGetImage } from "styles/buttonGetImage";

const Style = SButtonGetImage();

interface ButtonProps {
    onPress: () => void;
  }
export default function ButtonGetImage({onPress}: ButtonProps) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Selecionar Imagem raio X</Text>
            </View>
        </TouchableOpacity>
    );
}