import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

// Services
import { ApiKey }             from '@services/apiKey';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";

// Funçoes 'Css_' abaixo
import { getStylesBG } from "styles/backgroundImage";
import { SExames }     from 'styles/styleExames';
// Components
import  ButtonGetDocument from "@components/exames/buttonSelecionarDocumento";

//-----
const StyleBD = getStylesBG(); 
const Style   = SExames();

interface Props {
    navigation: any;
};


export default function Exames({navigation}: Props){
    const [text, setText]           = useState<string>('');
    const [Documento, setDocumento] = useState<string>('');

    const getDocument = async () => {
        try {
            // Pegando o documento
            const result = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
                copyToCacheDirectory: true,
            });
            // Verificando se o arquivo foi selecionado
            if (result.type === 'cancel') {
                throw new Error('Documento não selecionado');
            }else{
                setDocumento("Documento Selecionado ...");
            }

            // Pegando o URI do arquivo
            const uri = await result["assets"][0]["uri"];
            
            // Lendo o arquivo como base64
            const response = await fetch(uri);
            
            // Convertendo o arquivo em base64
            const blob = await response.blob();

            // Convertendo o arquivo em base64
            const base64 = await new Promise((resolve, reject) => {
                // Convertendo o arquivo em base64
                const reader = new FileReader();    
                reader.onload = () => resolve(reader.result.split(',')[1]);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
            const API_KEY = ApiKey();
            // Configurando e chamando a API Gemini
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: 'models/gemini-exp-1206' });

            // Gerando o texto
            const text_ = await model.generateContent([
            {
                inlineData: { data: base64, mimeType: "application/pdf", },
            },
                'Meu exame de sangue está ok? me de uma resposta em 10 linhas', // prompt
            ]);

            setText(text_.response.text());
            
        // Tratando os erros
        }catch(error: any){
            alert(error.message);
        }
    };

    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBD.container}>
            
            <View style={Style.viewMain}>
                <View style={Style.viewGroupButton}>
                    <ButtonGetDocument onPress={() =>{ getDocument(); }}/>
                    { Documento ? <Text>{Documento}</Text> : null }
                    { text ? <View>
                                <Text>{text}</Text> 
                            </View> : null }
                </View>
            </View>
            
        </ImageBackground>
    )
}