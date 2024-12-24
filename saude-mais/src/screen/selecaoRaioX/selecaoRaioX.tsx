import { View, Text, ImageBackground, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


// compoments 
import ButtonTuberculose from '@components/selecaoRaioX/buttonTurbeculose';


// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";
import Icon        from "@assets/icons/Iconlogo.png";

// Funçoes 'Css_' abaixo
import { getStylesBG }    from "styles/backgroundImage";
import { getStylesMain }  from "styles/stylesMain";


const StyleBD = getStylesBG();
const Style = getStylesMain();

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface Props {
    navigation: MainScreenNavigationProp;
}

export default function SelecaoRaioX({navigation} : props){

    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBD.container}>
            <View style={Style.viewMain}>
                <View>
                    <Image source={Icon} style={StyleBD.iconLogo}/>    
                </View>
                    
                <View style={Style.viewGroupButton}>
            
                    <View style={Style.viewButtons}>
                        < ButtonTuberculose onPress={() => navigation.navigate("Tuberculose")} />
                    </View>
                    
                    <View style={Style.viewButtons}>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

