import { TouchableOpacity , View , Text } from "react-native";

import { SButtonEsqueciSenha } from "styles/buttonLoginEsqueceuSenha";


const Style = SButtonEsqueciSenha();
export default function ButtonEsqueceuSenha({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={Style.text}>Esqueceu sua senha?</Text>
            </View>
        </TouchableOpacity>
    );
}