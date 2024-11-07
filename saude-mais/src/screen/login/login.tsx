import React ,{ useState } from "react";
import { View , Text , TextInput , ImageBackground , Image, Alert  } from "react-native";
import MaskInput ,{ Masks } from 'react-native-mask-input';
import { StackNavigationProp } from '@react-navigation/stack';

// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";
import Icon_        from "@assets/icons/icon_logo.png";

// Services
import { Logar } from "services/logarUsuario";

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
    
    const [Boleano,setBoleano] = useState<string |boolean>(true);
    const [Email_ ,setEmail]   = useState<string |null>(null);
    const [Senha ,setSenha]    = useState<string |null>(null);
    const [Olho  ,setOlho ]    = useState<string |boolean>(true);

    const SenhaVisivel = () => setOlho(!Olho)
    const EsqueceuSenha = () => {
        alert('função indisponivel');
    }
    const Entrar = async() => {
        const result_ = Logar(Email_, Senha);
    }

    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBackgroud.container}>
            <View>
                <Image source={Icon_} style={StyleBackgroud.iconLogo}/>
            </View>

            <View style={Style.containerLogin}>  
                <Text style={Style.text} >Email</Text>
                    <MaskInput 
                        placeholder  = {"Digite seu email"}
                        maxLength    = {40}
                        style        = {Style.textInput}
                        value        = {Email_}
                        onChangeText = {setEmail}
                        keyboardType = 'default'
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
                    <ButtonEsqueceuSenha onPress={()=> EsqueceuSenha()}/>
                </View>
                
                <View style={Style.ViewButtonEntrar}>
                    <ButtonEntrar onPress={() => Entrar() }/>
                </View>
            </View>

            <View style={Style.ViewButtonCadastrar}>
                <ButtonCadastrar  onPress={() => {navigation.navigate('CadastroUsuario')} }/>
            </View>

        </ImageBackground>
    );
}
