import React ,{ useState } from "react";
import { 
    View , 
    Text , 
    ImageBackground ,  
    ScrollView  } from "react-native";

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList  } from "@navigation/navegacaoMain"

// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";

// Estilos
import { getStylesBG } from "styles/backgroundImage";
import { SCadastrar }  from "styles/stylesCadastrar";

// Subscreens
import Formulario1 from './subFormularioUsuario1';
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

    const [NomeUser,setNomeUser]             = useState<string | null>('');
    const [dataNascimento,setdataNascimento] = useState<string | null>('');
    const [Email,setEmail]  = useState<string | null>(null);
    const [Senha ,setSenha] = useState<string | null>(null);
    const [Rsenha,setRsenha]= useState<string | null>(null);

    const cadastrarUser = async() => {

        try{
            const inforUser = {
                nome_ : NomeUser,
                data_ : dataNascimento,
                email: Email,            
                rsenha:Rsenha, senha: Senha
            }
            const result_:boolean = UserVerify(inforUser);

            if ( result_ == true){
                delete inforUser.rsenha;

                const validationCad = await CadastrarUsuario(inforUser);
                
                if (validationCad){
                    alert('Cadastro efetuado, retornando para Screen de Login...');
                    navigation.navigate('Login', { email : inforUser.email });
                }
            }
        }catch(error){
            alert(error.message);
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
                    />
                    <Formulario3
                        emailChange = {setEmail}
                        senhaChange = {setSenha}
                        rsenhaChange= {setRsenha}
                    />
                    <View style={{marginBottom:250}}></View>
            </ScrollView>
            </View>
            <View style={StylesCadastra.button_}>
                <ButtonCadastrar onPress={()=>{ cadastrarUser()}}/>
            </View>

   
        </ImageBackground>
    );
}