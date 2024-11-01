import React ,{ useState } from "react";
import { 
    View , 
    Text , 
    TextInput , 
    ImageBackground , 
    Image, 
    ScrollView  } from "react-native";
import MaskInput ,{ Masks } from 'react-native-mask-input';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList  } from "@navigation/navegacao_principal"

// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";
import Icon_        from "@assets/icons/icon_logo.png";

// 
import { getStylesBG } from "styles/backgroundImage";





const StyleBackgroud = getStylesBG();

// Constantes para navegação
type OutraTelaNavigationProp = StackNavigationProp<RootStackParamList, 'OutraTela'>;

interface Props {
    navigation: OutraTelaNavigationProp;
}

export default function CadastroUsuario({navigation}: Props){

    const [NomeUser,setNomeUser]            = useState(null);
    const [dataNascimento,setdataNascimento] = useState(null);
    const [Rg,setRg]                         = useState(null);
    const [Cpf,setCpf]                       = useState(null);
    

    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBackgroud.container}>
            
            <ScrollView>
            </ScrollView>
   
        </ImageBackground>
    );
}


