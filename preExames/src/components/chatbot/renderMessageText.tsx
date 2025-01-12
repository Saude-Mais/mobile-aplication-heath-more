import { MessageText } from 'react-native-gifted-chat';
import { View,Text } from 'react-native';
interface props{
    props : void;
}

const RenderMessageText = (props:props) => {
    return (
        <MessageText
            {...props}
            textStyle={{
                left: { fontSize: 14, color: 'black' }, // Mensagem do bot
                right: { fontSize: 14, color: 'white' }, // Mensagem do usuário
            }}
        />
    );
};

export default RenderMessageText;

