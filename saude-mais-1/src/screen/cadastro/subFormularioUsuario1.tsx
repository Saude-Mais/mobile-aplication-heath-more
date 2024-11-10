import React ,{ useState } from "react";

import { TextInput, Text, View } from "react-native";

import MaskInput ,{ Masks } from 'react-native-mask-input';

import { SFormulario } from "styles/stylesFormulario";


const Style = SFormulario();

interface Formulario1Props {
    nomeChange             : (nome: string) => void;
    dataDeNascimentoChange : (dt : string ) => void;
    registroGeralChange    : (RG_: string)  => void;
    cpfChange              : (cpf: string)  => void;
    nome : string;
    data : string;
    rg   : string;
    cpf  : string;
}

export default function Formulario1(
    {
        nomeChange, dataDeNascimentoChange, registroGeralChange, cpfChange,
        nome, data, rg, cpf
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
                
                <Text style={Style.text}>Registro Geral (R.G)</Text>
                <MaskInput
                    placeholder  ="Digite seu RG"
                    style        = {Style.textInput}
                    keyboardType = "numeric"
                    maxLength    = {9}
                    value        = {rg}
                    onChangeText = {registroGeralChange}
                    mask         = {[/\d/,'.', 
                                    /\d/, /\d/, /\d/, '.',
                                    /\d/, /\d/, /\d/
                                    ]}
                />

                <Text style={Style.text}>Cadastro de pessoa física (C.P.F)</Text>
                <MaskInput
                    placeholder  ="Digite seu CPF"
                    style        = {Style.textInput}
                    keyboardType = "numeric"
                    maxLength    = {14}
                    value        = {cpf}
                    onChangeText = {cpfChange}
                    mask         = {Masks.BRL_CPF}
                
                />
            </View>         
    )
}