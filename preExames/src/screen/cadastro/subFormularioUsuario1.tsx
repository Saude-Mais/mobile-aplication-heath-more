import React from "react";
import { TextInput, Text, View } from "react-native";


import { SFormulario } from "styles/stylesFormulario";

const Style = SFormulario();

interface Props {
    nomeChange: (nome: string) => void;
    nome      : string;
}

export default function Formulario1({ nomeChange, nome } : Props ):JSX.Element{
    return(    
        <View>
            <Text style={Style.text}>Nome Completo </Text>
            <TextInput 
                placeholder  ="Digite seu nome"
                keyboardType = "default"
                style        = {Style.textInput}
                onChangeText = {nomeChange}
                value = {nome}
            />
        </View>         
    )
}