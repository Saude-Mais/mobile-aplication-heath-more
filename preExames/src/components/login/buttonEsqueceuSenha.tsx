import { TouchableOpacity , View , Text } from "react-native";

import { SButtonEsqueciSenha } from "styles/buttonLoginEsqueceuSenha";


const Style = SButtonEsqueciSenha();
interface props {
    onPress: () => void;
}
export default function ButtonEsqueceuSenha({onPress}:props){
    return(
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={Style.text}>Esqueceu sua senha?</Text>
            </View>
        </TouchableOpacity>
    );
}