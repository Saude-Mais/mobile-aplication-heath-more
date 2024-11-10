import   React,{ useState } from "react";
import { View , Text , TextInput } from "react-native";
import MaskInput ,{ Masks } from 'react-native-mask-input';


import { SFormulario } from "styles/stylesFormulario";


const Style = SFormulario();

interface Formulario2Props {
    cepChange : (cep : string) => void;
    nomeRuaChange : (nomeRua : string) => void;
    numeroRuaChange : (numeroRua : string) => void;
    cidadeChange : (cidade : string) => void;
    estadoChange : (estado : string) => void;
    cep: string;
}

export default function Formulario2(
    {
    cepChange, nomeRuaChange, numeroRuaChange,
    cidadeChange, estadoChange,
    cep
    } : Formulario2Props 
){
        
    return(   
        <View>
            <Text style={Style.text}>Cep</Text>
                <MaskInput 
                    placeholder  ="Digite seu CEP"
                    style        = {Style.textInput}
                    keyboardType = "numeric"
                    maxLength    = {9}
                    value        = {cep}
                    onChangeText = {cepChange}
                    mask         = {[/\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/]}
                />

                <View style={Style.containerBairroRua}>
                    <View>
                        <Text style={Style.textBairroRua}>Rua </Text>
                        <TextInput
                            placeholder  ="Digite o nome da rua"
                            style        = {Style.textInputRua}
                            onChangeText = {nomeRuaChange}
                            />
                    </View>

                    <View style={{paddingLeft:20}}>
                        <Text style={Style.textBairroRua}>Número </Text>
                        <TextInput
                            placeholder  ="Digite o número"
                            keyboardType ='numeric'
                            style        = {Style.textInputNumero}
                            onChangeText = {numeroRuaChange}
                            />
                    </View>
                </View>

                <Text style={Style.text}>Cidade</Text>
                    <TextInput 
                        placeholder  ="Digite sua Cidade"
                        style        = {Style.textInput}
                        onChangeText = {cidadeChange}
                        />

                <Text style={Style.text}>Estado</Text>
                    <TextInput 
                        placeholder  ="Digite seu Estado"
                        style        = {Style.textInput}
                        onChangeText = {estadoChange}
                        />
        </View>
    );
}

