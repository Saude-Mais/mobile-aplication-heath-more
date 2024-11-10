import { View, Text, ImageBackground, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


// compoments 
import ButtonTuberculose from '@components/selacao/buttonTuberculose';

// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";
import Icon_        from "@assets/icons/icon_logo.png";

// Funçoes 'Css_' abaixo
import { getStylesBG }    from "styles/backgroundImage";
import { getStylesMain }  from "styles/stylesMain";


const StyleBD = getStylesBG();
const Style = getStylesMain();

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface Props {
    navigation: MainScreenNavigationProp;
}
export default function SelecaoExame({navigation}: Props){
    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBD.container}>
            <View style={Style.viewMain}>
                <View>
                    <Image source={Icon_} style={StyleBD.iconLogo}/>    
                </View>
                    
                <View style={Style.viewGroupButton}>
                    <View style={Style.viewButtons}>
                        < ButtonTuberculose onPress={()=>{navigation.navigate("Tuberculose")}}/>
                    </View>
                    
                    <View style={Style.viewButtons}>
                    </View>
                    
                    <View style={Style.viewButtons}>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}