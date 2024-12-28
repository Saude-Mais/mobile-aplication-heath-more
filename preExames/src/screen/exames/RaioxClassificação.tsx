import { 
    View, 
    Text, 
    ImageBackground, Image
    } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState }            from 'react';
import * as ImagePicker        from 'expo-image-picker';
import DropDownPicker          from 'react-native-dropdown-picker';


// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";
import Icon         from "@assets/icons/Iconlogo.png";

// Funçoes 'Css_' abaixo
import { getStylesBG }          from "styles/backgroundImage";
import { getStylesMain }        from "styles/stylesMain";
import { SRaioxClassificacao }  from "styles/styleRaioxClassificacao";


// Components
import ButtonGetImage   from '@components/classificacaoRaioX/buttonImage';
import ButtonEnviarFoto from '@components/classificacaoRaioX/buttonEnviarFoto';

//-----
const StyleBD = getStylesBG();
const Style   = SRaioxClassificacao();

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
interface Props {
    navigation: MainScreenNavigationProp;
};


export default function RaioXClassificacao({navigation}: Props){
    
    const [image, setImage]                 = useState<string | null>(null);
    const [Visible, setVisible]             = useState<true | false>(false);

    const [open, setOpen] =   useState<string | null>(false);
    const [value, setValue] = useState<string | null>(null);

    const [items, setItems] = useState([
        {label: 'Tuberculose', value: 'tuber'},
        {label: 'Pneumonia'  , value: 'pneu' },
        {label: 'mamografia' , value: 'mamo' },
    ]); 

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        try{
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            
            if (permissionResult.granted === false) {
                alert("Permission to access camera roll is required!");
                return;
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

    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBD.container}>
                    <View style={Style.viewMain}>


                        <View style={Style.viewGroupButton}>
                            <View>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                style={Style.dropDown}
                            />
                            </View>
                            
                        </View>
                        <View style={Style.viewImage}>
                            {image && <Image source={{ uri: image }} style={Style.image} />}
                        </View>
                                
                        <View style={Style.viewButtonVisible}>
                            { 
                                Visible && 
                                <ButtonEnviarFoto />
                            }
                        </View>
                    </View>
        </ImageBackground>
    )
}