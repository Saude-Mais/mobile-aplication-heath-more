import { useState ,useEffect } from "react";
import { useRoute }            from "@react-navigation/native";

import { TouchableOpacity , View , Text , 
         ImageBackground , Image , ScrollView } from "react-native";

//Services

// Styles
import { SHomeCrianca }   from 'styles/stylesHomeCrianca';

// Imagens e icones 
import plano_de_fundo           from '@assets/image/planodeFundoCrianca.png';
import Icone_criancas           from '@assets/icons/icon_crianças.png';

import ButtonMenu              from "@components/homeCrianca/buttonMenu";
//import Button_adicionar_crianca from '../form_button/button_cadastrar_crianca';

const Style = SHomeCrianca();

const paletaCores = [
    '#eecbca',
    '#80c6f2',
    '#d3b5f6',
    '#c17383',
    '#ff7fa8',
    '#e5804d',
    '#938672'
  ];

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface Props {
    navigation: MainScreenNavigationProp;
}

export default function HomeCrianca({navigation} : props){

    const route = useRoute();
    const [Cores,setCores]       = useState([]);
    const [view, setView]        = useState([]);
    const [Criancas,setCriancas] = useState([]);

    
    useEffect(() => {
        const addcionar_cores = (tamanho) =>
        {
            var cores = [];
            for (let i=0;i<tamanho;i++)
            {
                var c = Math.ceil(Math.random() * paletaCores.length-1)              
                cores.push(paletaCores[c]);
            }
            setCores(cores);
        }

        const fetchValores = async () => {
            //const valoresData = await Getcriancas(route.params.Email);

            if (valoresData.length !=0)
            {
                addcionar_cores(valoresData.length);
                setCriancas(valoresData);
            }
        };
        fetchValores();
      }, 
    []);
    
    const Cadastro = () =>{
        //navigation.navigate('Cadastro_Crianca',{Email:route.params.Email})
    }  

    const Crianca = (Nome, id) =>{ 
        //navigation.navigate('Crianca',{Nome:Nome,criancaId:id})
    }

    const Abrir_menu = () => { 
        navigation.openDrawer(); 
    }
   
    
    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>

            <View style={Style.containerButtonMenu}>
                < ButtonMenu />
            </View>

            <View style={Style.conteinerNomeCrianca}>
                <Image source={Icone_criancas} style={Style.iconeCrianca}/>
            </View>

            <ScrollView style={Style.scrollView}>
                {Criancas.map((item,index) =>
                    <TouchableOpacity style={
                        {   
                            backgroundColor:Cores[index],
                            alignItems    :'center',
                            justifyContent: 'center',
                            width:350,
                            height:50,
                            marginBottom:20,
                            borderRadius:10,
                        }
                    } key={index} onPress={()=>Crianca(item.Nome,item.id)}>
                        <Text style={
                            {   
                                color:'white',
                                fontWeight:'bold',
                                fontSize:16,
                                textShadowColor:'black',
                                textShadowRadius:10,
                                textShadowOffset:{
                                    width:1,
                                    height:-1
                                }
                            }
                            }></Text>
                    </TouchableOpacity>
                )}

            <View style={Style.containerButtonAdcionar}> 
                <Text style={Style.textCadastrarCrianca}>Cadastrar Criança</Text>
            </View>
            
            </ScrollView>

        </ImageBackground>
    );
}

