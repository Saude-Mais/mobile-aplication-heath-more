import React ,{ useState } from "react";
import { View , Text , TextInput , ImageBackground , Image, Alert  } from "react-native";
import MaskInput ,{ Masks } from 'react-native-mask-input';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList  } from '@navigation/navegacao_principal';

// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";
import Icon_        from "@assets/icons/icon_logo.png";


// Funçoes 'Css_' abaixo
import { getStylesBG }    from "styles/backgroundImage";
import { getStylesLogin } from "styles/stylesLogin";

// Componentes
import ButtonEntrar        from "@components/login/buttonEntrar";
import ButtonEsqueceuSenha from "@components/login/buttonEsqueceuSenha";
import ButtonCadastrar     from "@components/login/buttonCadastrar";
import ButtonVisibilidadeSenha from "@components/login/buttonVisibilidadeSenha";

// Estilos
const StyleBackgroud = getStylesBG();
const Style          = getStylesLogin();


// Tipo para a navegação
type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface Props {
    navigation: MainScreenNavigationProp;
}
export default function Login({navigation}: Props) {
    
    const [Boleano,setBoleano]     = useState(true);
    const [Texto ,setTexto]        = useState('');
    const [Cpf   ,setCpf  ]        = useState(null);
    const [Senha ,setSenha]        = useState(null);
    const [Olho  ,setOlho ]        = useState(true);

    const SenhaVisivel = () => setOlho(!Olho)


    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBackgroud.container}>
            <View>
                <Image source={Icon_} style={StyleBackgroud.iconLogo}/>
            </View>

            <View style={Style.containerLogin}>  
                <Text style={Style.text} >Cpf{Texto}</Text>
                    <MaskInput 
                        placeholder  = {"Digite seu Cpf"}
                        maxLength    = {14}
                        style        = {Style.textInput}
                        value        = {Cpf}
                        onChangeText = {setCpf}
                        mask         = {Masks.BRL_CPF}
                        keyboardType = 'numeric'
                    />
                
                <Text style={Style.text}>Senha</Text>
                <View>
                    <View>                 
                        <TextInput 
                            placeholder     = "Digite sua senha"
                            style           = {Style.textInput}
                            value           = {Senha}
                            onChangeText    = {setSenha} 
                            secureTextEntry = {Olho}
                        />
                    </View> 
                    <View style={Style.viewIconOlho}>
                        <ButtonVisibilidadeSenha onPress={SenhaVisivel}/>
                        <Text></Text>
                    </View>

                </View>
                
                <View style={Style.ViewButtonEsqueciS}>
                    <ButtonEsqueceuSenha />
                </View>
                
                <View style={Style.ViewButtonEntrar}>
                    <ButtonEntrar />
                </View>
            </View>

            <View style={Style.ViewButtonCadastrar}>
                <ButtonCadastrar  onPress={() => {navigation.navigate('CadastroUsuario')} }/>
            </View>

        </ImageBackground>
    );
}
