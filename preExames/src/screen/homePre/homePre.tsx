/* eslint-disable prettier/prettier */
import { View, ImageBackground, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRoute }            from '@react-navigation/native';

// compoments 
import ButtonRaioX           from '@components/selecaoHomePre/buttonRaioX';
import ButtonHistorico       from '@components/selecaoHomePre/buttonHistorico';
import ButtonPreExamesSangue from '@components/selecaoHomePre/buttonExamesSangue';

// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";
import Icon         from "@assets/icons/Iconlogo.png";

// Funçoes 'Css_' abaixo
import { getStylesBG }    from "styles/backgroundImage";
import { getStylesMain }  from "styles/stylesMain";


const StyleBD = getStylesBG();
const Style = getStylesMain();

// Constantes para navegação
type RootStackParamList = {
    OutraTela: undefined;
    Login: { email: string };
};

type OutraTelaNavigationProp = StackNavigationProp<RootStackParamList, 'OutraTela'>;

interface Props {
    navigation: OutraTelaNavigationProp;
}


export default function HomePre({navigation} : Props): JSX.Element {
    const route = useRoute();

    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBD.container}>
            <View style={Style.viewMain}>
                <View style={StyleBD.viewLogo}>
                    <Image source={Icon} style={StyleBD.iconLogo}/>    
                </View>
                    
                <View style={Style.viewGroupButton}>
                    <View style={Style.viewButtons}>
                        < ButtonHistorico      
                            onPress={()=>{navigation.navigate('Historico', {userID : route.params.userID})}}/>
                    </View>
                    
                    <View style={Style.viewButtons}>
                        < ButtonPreExamesSangue 
                            onPress={()=>{navigation.navigate("Exames", { userID:route.params.userID })}}/>
                    </View>

                    <View style={Style.viewButtons}>
                        < ButtonRaioX           
                            onPress={()=>{navigation.navigate("RaioX")}}/>
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

