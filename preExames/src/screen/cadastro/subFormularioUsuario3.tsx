import   React from "react";
import { View , Text , TextInput } from "react-native";

// estilos
import { SFormulario } from "styles/stylesFormulario";

const Style = SFormulario();

interface Props{
    emailChange : (email : string) => void;
    senhaChange : (senha : string) => void;
    rsenhaChange: (rsenha: string) => void;
}

export default function Formulario3({ emailChange, senhaChange, rsenhaChange } : Props):JSX.Element{
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
