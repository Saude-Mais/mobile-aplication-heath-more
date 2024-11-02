import React ,{ useState } from "react";
import { 
    View , 
    Text , 
    TextInput , 
    ImageBackground , 
    KeyboardAvoidingView, Platform,
    ScrollView  } from "react-native";
import MaskInput ,{ Masks } from 'react-native-mask-input';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList  } from "@navigation/navegacao_principal"

// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";
import Icon_        from "@assets/icons/icon_logo.png";

// Estilos
import { getStylesBG } from "styles/backgroundImage";
import { SCadastrar }  from "styles/stylesCadastrar";

// Subscreens
import Formulario1 from './subFormularioUsuario1';
import Formulario2 from "./subFormularioUsuario2";
import Formulario3 from "./subFormularioUsuario3";

// compenetes
import ButtonCadastrar from "@components/cadastrar/buttonCadastrar";

// utils
import { UserVerify } from "utils/verificaVariaveisUser";

// services
import { CadastrarUsuario } from "services/cadastrarUsuario";

// estilos
const StyleBackgroud = getStylesBG();
const StylesCadastra = SCadastrar();


// Constantes para navegação
type OutraTelaNavigationProp = StackNavigationProp<RootStackParamList, 'OutraTela'>;

interface Props {
    navigation: OutraTelaNavigationProp;
}

export default function CadastroUsuario({navigation}: Props){

    const [NomeUser,setNomeUser]             = useState<string | null>(null);
    const [dataNascimento,setdataNascimento] = useState<string | null>(null);
    const [Rg,setRg]                         = useState<string | null>(null);
    const [Cpf,setCpf]                       = useState<string | null>(null);
    const [Cep,setCep]                     = useState<string | null>(null);
    const [nomeRua,setNome_Rua]           = useState<string | null>(null);
    const [numeroRua,setNumero_Rua]       = useState<string | null>(null);
    const [Cidade,setCidade]               = useState<string | null>(null);
    const [Estado,setEstado]               = useState<string | null>(null);
    const [Email,setEmail]  = useState<string | null>(null);
    const [Senha ,setSenha]   = useState<string | null>(null);
    const [Rsenha,setRsenha]  = useState<string | null>(null);

    const cadastrarUser = async() => {
        const infor_user = {
            nome_ : NomeUser,
            data_ : dataNascimento,
            rg_   : Rg,
            cpf_  : Cpf,
            cep_  : Cep,
            nome_rua : nomeRua, numero_rua: numeroRua,
            cidede : Cidade, estado: Estado,
            email: Email,            
            rsenha:Rsenha, senha: Senha
        }
        const result_:Boolean = UserVerify(infor_user)
        if ( result_ ){
            
        }


    } 

    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBackgroud.container2}>
            
            <View style={StylesCadastra.viewSpace}>
                <Text style={StylesCadastra.text}>Preencha o Formulário de Cadastro</Text>
            </View>
        
            <View style={StylesCadastra.viewFormulario}>
            <ScrollView style={StylesCadastra.scroll}>
                    <Formulario1 
                        nomeChange            ={setNomeUser}
                        dataDeNascimentoChange={setdataNascimento}
                        registroGeralChange   ={setRg}
                        cpfChange             ={setCpf}
                        nome = {NomeUser}
                        data = {dataNascimento}
                        rg   = {Rg}
                        cpf  = {Cpf}
                    />
                    <Formulario2 
                        cepChange       = {setCep}
                        nomeRuaChange   = {setNome_Rua}
                        numeroRuaChange = {setNumero_Rua}
                        cidadeChange    = {setCidade}
                        estadoChange    = {setEstado }
                        cep = {Cep}
                    />
                    <Formulario3
                        emailChange = {setEmail}
                        senhaChange = {setSenha}
                        rsenhaChange= {setRsenha}
                    />
                    <View style={{marginBottom:300}}></View>
            </ScrollView>
            </View>
            <View style={StylesCadastra.button_}>
                <ButtonCadastrar onPress={()=>{ cadastrarUser()}}/>
            </View>

   
        </ImageBackground>
    );
}


