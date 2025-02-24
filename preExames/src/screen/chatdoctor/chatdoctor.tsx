import { View, Text, ImageBackground, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { GiftedChat }          from 'react-native-gifted-chat';
import { useState }            from 'react';
import { useEffect }           from 'react';
// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";

// 
import { ApiKey }             from '@services/apiKey';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai"

// Funçoes 'Css_' abaixo
import { getStylesBG }    from "styles/backgroundImage";
import { SChatbot }       from "styles/styleChatbot";


// componentes
import RenderMessageText from '@components/chatbot/renderMessageText';
import EnviarMensagem     from '@components/chatbot/enviarMensagem';


const Style   = SChatbot();
const StyleBD = getStylesBG();


// Constantes para navegação
type RootStackParamList = {
    OutraTela: undefined;
    Login: { email: string };
};

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OutraTela'>;

interface props {
    navigation: MainScreenNavigationProp;
}

export default function ChatDoctor({navigation} : props):JSX.Element{

    const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
      ];
    const [messages, setMessages] = useState<string|null>([]);
    
    // Mensagem inicial do bot
    useEffect(() => {
        setMessages([
            {
            _id: 1,
            text: 'Olá! Como posso te ajudar hoje?',
            createdAt: new Date(),
            user: { _id: 2,  name: 'Chatbot'},
            },
        ]);
    }, []);

    const enviaRepostaChat = async(text:string):Promise<void> =>{
        try{
            // Aqui você pode chamar sua API (Dialogflow, Rasa, ou outro)
            const API_KEY = ApiKey();
            
            // Configurando e chamando a API Gemini
            const genAI = new GoogleGenerativeAI(API_KEY);

            var prompt  = "Contexto: Saúde geral\nLimite:até 15 linhas\nCom base no contexto,responda a pergunta a seguir:"+text

            const model = genAI.getGenerativeModel({ model: 'models/gemini-2.0-flash-exp' ,safetySettings: safetySettings});

            const result = await model.generateContent(prompt);

            const resposta = {
                        _id : Math.random(),
                        text: result.response.text(),
                        createdAt: new Date(),
                        user: { _id: 2,  name: 'Chatbot'},
                    }
            
            setMessages((prevMessages):Promise<void> => GiftedChat.append(prevMessages, [resposta]));
        }catch(error){
            alert(error.message)
        }
    }
    const onSend = async(newMessages = []):Promise<void> => {
        try{
            setMessages(GiftedChat.append(messages, newMessages));
            const text = newMessages[0].text; 
            await enviaRepostaChat(text);

        }catch(error){
            alert(error.message);
        }
      };


    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBD.container}>
            <View style={Style.viewChat}>
                    <GiftedChat
                        messages={messages}
                        onSend={messages => onSend(messages)}
                        user={{ _id: 1 }}
                        renderMessageText={(props) => <RenderMessageText {...props} />} 
                        renderSend={(props)=> <EnviarMensagem {...props}/>}
                    />
            </View>
        </ImageBackground>
    );
}

