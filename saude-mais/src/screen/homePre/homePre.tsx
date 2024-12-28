import { View, Text, ImageBackground, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


// compoments 
import ButtonRaioX           from '@components/selecaoHomePre/buttonRaioX';
import ButtonHistorico       from '@components/selecaoHomePre/buttonHistorico';
import ButtonPreExamesSangue from '@components/selecaoHomePre/buttonExamesSangue';
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

export default function HomePre({navigation} : props){

    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBD.container}>
            <View style={Style.viewMain}>
                <View>
                    <Image source={Icon} style={StyleBD.iconLogo}/>    
                </View>
                    
                <View style={Style.viewGroupButton}>
                    <View style={Style.viewButtons}>
                        < ButtonHistorico />
                    </View>
                    
                    <View style={Style.viewButtons}>
                        < ButtonPreExamesSangue onPress={()=>{navigation.navigate("Exames")}}/>
                    </View>

                    <View style={Style.viewButtons}>
                        < ButtonRaioX onPress={()=>{navigation.navigate("SelecaoRaioX")}}/>
                    </View>
                    
                    <View style={Style.viewButtons}>
                    </View>
                    
                    <View style={Style.viewButtons}>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

