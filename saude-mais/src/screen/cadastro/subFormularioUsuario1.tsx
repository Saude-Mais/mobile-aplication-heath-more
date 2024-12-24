import React ,{ useState } from "react";
import { TextInput, Text, View } from "react-native";
import MaskInput ,{ Masks } from 'react-native-mask-input';


import { SFormulario } from "styles/stylesFormulario";

const Style = SFormulario();

interface Formulario1Props {
    nomeChange             : (nome: string) => void;
    dataDeNascimentoChange : (dt : string ) => void;
    nome : string;
    data : string;
}

export default function Formulario1(
    {
        nomeChange, dataDeNascimentoChange,
        nome, data
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
                
                <Text style={Style.text}>Data de nascimento </Text>
                <MaskInput
                    style        = {Style.textInput}
                    placeholder  = "Sua data de nascimento"
                    keyboardType = "numeric"
                    maxLength    = {10}
                    value        = {data}
                    onChangeText = {dataDeNascimentoChange}
                    mask         = {[/\d/, /\d/, '/', 
                                    /\d/, /\d/, '/', 
                                    /\d/, /\d/, /\d/, /\d/
                                    ]}
                />
            </View>         
    )
}