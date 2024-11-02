import   React,{ useState } from "react";
import { View , Text , TextInput } from "react-native";
import MaskInput ,{ Masks } from 'react-native-mask-input';

// estilos
import { SFormulario } from "styles/stylesFormulario";

const Style = SFormulario();

interface Formulario3Props{
    emailChange : (email : string) => void;
    senhaChange : (senha : string) => void;
    rsenhaChange: (rsenha: string) => void;
}

export default function Formulario3(
    {
        emailChange, senhaChange, rsenhaChange
    } : Formulario3Props
){
  
      return(
            <View>
                <Text style={Style.text}>E-mail</Text>
                <TextInput 
                    placeholder  = "Digite seu nome"
                    style        = {Style.textInput}
                    onChangeText = {emailChange}
                />
                <Text style={Style.text}>Crie sua senha </Text>
                <TextInput
                    placeholder  = "Digite a senha"
                    style        = {Style.textInput}
                    maxLength    = {25}
                    onChangeText = {senhaChange}
                />
                <Text style={Style.text}>Confirme sua senha</Text>
                <TextInput 
                    placeholder  ="Repita a senha"
                    style        = {Style.textInput}
                    maxLength    = {25}
                    onChangeText = {rsenhaChange}
                    />
            </View>
    );
}
