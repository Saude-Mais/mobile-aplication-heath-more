import { Send } from "react-native-gifted-chat";
import { View, Text } from "react-native";

//
import { SComponentEM } from "styles/componentEnviarMensagem";

const Style = SComponentEM();

interface props{
    props:void
}

const EnviarMensagem = (props:props) => {
    return (
        <Send {...props}>
            <View style={Style.view}>
                <Text style={Style.text}>Enviar</Text>
            </View>
        </Send>
        );
};

export default EnviarMensagem;