/* eslint-disable prettier/prettier */
import { 
    View, 
    Text, 
    ImageBackground, Image, ActivityIndicator
    } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState }            from 'react';
import * as ImagePicker        from 'expo-image-picker';
import DropDownPicker          from 'react-native-dropdown-picker';


// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";

// Funçoes 'Css_' abaixo
import { getStylesBG }          from "styles/backgroundImage";
import { SRaioxClassificacao }  from "styles/styleRaioxClassificacao";

// model
import axios from 'axios';
// Components
import ButtonGetImage   from '@components/classificacaoRaioX/buttonImage';
import ButtonEnviarFoto from '@components/classificacaoRaioX/buttonEnviarFoto';

//-----
const StyleBD = getStylesBG();
const Style   = SRaioxClassificacao();

// Constantes para navegação
type RootStackParamList = {
    OutraTela: undefined;
    Login: { email: string };
};

type OutraTelaNavigationProp = StackNavigationProp<RootStackParamList, 'OutraTela'>;

interface Props {
    navigation: OutraTelaNavigationProp;
}

export default function RaioXClassificacao({navigation}: Props): JSX.Element{

    const [tflite, setTflite] = useState(null);
    const [prediction, setPrediction] = useState('');
    const [loading, setLoading] = useState(false);
    const [image, setImage]     = useState<string | null>(null);
    const [Visible, setVisible] = useState<true | false>(false);

    const [open, setOpen]   = useState<string | null>(null);
    const [value, setValue] = useState<string | null>(null);

    const [items, setItems] = useState([
        {label: 'Tuberculose', value: 'tuber'},
        {label: 'Pneumonia'  , value: 'pneu' },
        {label: 'mamografia' , value: 'mamo' },
    ]); 

    const pickImage = async ():Promise<void> => {
        // No permissions request is necessary for launching the image library
        try{
            if (value == null){
                throw new Error("Escolha um dos itens, por favor");
            }
            
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            
            if (permissionResult.granted === false) {
                throw new Error("Permissão para acessar a galeria de fotos é necessária!");
            };
    
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1,
            });
            
            if (!result.canceled) {
                setVisible(!Visible);
                setImage(result.assets[0].uri);
              }

        }catch(error: any){
            alert(error.message);
        }
    }
    const Tuberculose = async () => {
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('file', {
              uri: image,
              type: 'image/jpeg', // ou o tipo adequado
              name: 'image.jpg',
            });
        
            const response = await axios.post('http://192.168.3.7:5000/predict', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data && response.data.prediction !== undefined) {
                alert(`Predição: ${response.data.prediction}`);
            } else {
                alert('Erro ao receber a predição do servidor.');
            }
        } catch (error) {
            console.error('Erro ao enviar a imagem:', error);
        }
        setLoading(false);
      };
    
    const enviarImagem = async():void =>{
        if ( value == 'tuber' ){
           await Tuberculose();
        }
        
    }

    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBD.container}>
                    <View style={Style.viewMain}>


                        <View style={Style.viewGroupButton}>
                            <View>
                                <DropDownPicker
                                    open    ={open}
                                    value   ={value}
                                    items   ={items}
                                    setOpen ={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    style   ={Style.dropDown}
                                    
                                />
                            </View>
                            <View>
                                <ButtonGetImage onPress={()=>{pickImage();}}/>
                            </View>
                            
                        </View>
                        <View style={Style.viewImage}>
                            {image && <Image source={{ uri: image }} style={Style.image} />}
                        </View>
                        {loading && <ActivityIndicator size="large" color="#0000ff" />}
                        <View style={Style.viewButtonVisible}>
                            { 
                                Visible && 
                                <ButtonEnviarFoto onPress={():void =>{enviarImagem();}}/>
                            }
                        </View>
                    </View>
        </ImageBackground>
    )
}