import React ,{ useState } from "react";
import { TextInput, Text, View } from "react-native";
import MaskInput ,{ Masks } from 'react-native-mask-input';


import { SFormulario } from "styles/stylesFormulario";

const Style = SFormulario();

interface Formulario1Props {
    nomeChange             : (nome: string) => void;
    nome : string;
}

export default function Formulario1(
    {
        nomeChange, nome
    } : Formulario1Props
){

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