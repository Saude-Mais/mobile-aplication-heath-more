// Libs padrão
import { 
    Text, 
    View, 
    ImageBackground, 
    Image } from "react-native";

import { 
    StackNavigationProp 
} from '@react-navigation/native-stack';


// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";
import Icon        from "@assets/icons/Iconlogo.png";


// Funçoes 'Css_' abaixo
import { getStylesBG }     from "styles/backgroundImage";
import { getStylesMain } from "styles/stylesMain";

// Compomentes abaixo
import ButtonCardeneta from "@components/main/buttonCadeneta";
import ButtonExams     from "@components/main/buttonExames";
import ButtonChat      from "@components/main/buttonMaisInformacoes";


// Estilos
const StyleBackgroud = getStylesBG();
const Style = getStylesMain();


// rotas

// Constantes para navegação
type RootStackParamList = {
    OutraTela: undefined;
    Login: { email: string };
};

type OutraTelaNavigationProp = StackNavigationProp<RootStackParamList, 'OutraTela'>;

interface Props {
    navigation: OutraTelaNavigationProp;
}
export default function Main( { navigation } : Props):JSX.Element{
    return(

        <ImageBackground source={PlanoDeFundo} style={StyleBackgroud.container}>    
            <View style={Style.viewMain}>

                <View style={StyleBackgroud.viewLogo}>
                    <Image source={Icon} style={StyleBackgroud.iconLogo}/>    
                </View>

                <View style={Style.viewGroupButton}>
                    <View style={Style.viewButtons}>
                        <ButtonCardeneta onPress={() => navigation.navigate('Login')}/>
                    </View>

                    <View style={Style.viewButtons}>
                        <ButtonChat      onPress={()=>navigation.navigate('chatbot')}/>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}