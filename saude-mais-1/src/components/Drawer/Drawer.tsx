import { useRoute   } from "@react-navigation/native";
import { View , ImageBackground,Text ,Image } from "react-native";
import { DrawerItemList,DrawerContentScrollView } from "@react-navigation/drawer";

//import { Getcliente } from "src/BackEnd/FireBase/read/Cliente";
//Style 
import { SDrawer } from "styles/StylesDrawer";

// Imagens
import drawerUsuario  from "@assets/image/drawerUsuario.png";
import drawerImage    from '@assets/image/drawerFundo.png';


const Style = SDrawer();

// <Text style={Style.NomeUsuario}>{route.params.dadosUser.Nome}</Text>


export default function DrawerCustom(props){
    const route = useRoute();
    
    return(
        <ImageBackground style={{flex:1}} source={drawerImage}>
            <DrawerContentScrollView {...props}>
                <View style={Style.View_Usuario}>
                    <Image source={drawerUsuario} style={Style.Imagem}/>
                </View>

                <View style={Style.View_itens}>
                    <DrawerItemList {...props} />
                </View>
            
            </DrawerContentScrollView>
        </ImageBackground>
    )
}