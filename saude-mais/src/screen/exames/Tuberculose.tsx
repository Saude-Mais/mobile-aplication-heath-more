import { View, Text, ImageBackground, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState }            from 'react';
import * as ImagePicker        from 'expo-image-picker';

// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";
import Icon        from "@assets/icons/Iconlogo.png";

// Funçoes 'Css_' abaixo
import { getStylesBG }   from "styles/backgroundImage";
import { getStylesMain } from "styles/stylesMain";
import { STuberculose }  from "styles/styleTuberculose";


// Components
import ButtonGetImage   from '@components/tuberculose/buttonImage';
import ButtonEnviarFoto from '@components/tuberculose/buttonEnviarFoto';

//-----
const StyleBD = getStylesBG();
const Style   = STuberculose();

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
interface Props {
    navigation: MainScreenNavigationProp;
};


export default function Tuberculose({navigation}: Props){
    
    const [image, setImage] = useState<string | null>(null);
    const [Visible, setVisible] = useState<true | false>(false);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library

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

    }

    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBD.container}>
                    <View style={Style.viewMain}>

                        <View>
                            <Image source={Icon} style={StyleBD.iconLogo}/>    
                        </View>

                        <View style={Style.viewGroupButton}>
                            <ButtonGetImage onPress={() =>{ pickImage(); }}/>
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