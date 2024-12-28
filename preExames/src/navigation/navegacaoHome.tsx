import { useRoute } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator  } from "@react-navigation/stack";

// Componentes
import DrawerCustom      from '@components/Drawer/Drawer'

// Screens
import HomePre            from "@screen/homePre/homePre";
import SelecaoRaioX       from "@screen/selecaoRaioX/selecaoRaioX";
import RaioXClassificacao from "@screen/exames/RaioxClassificação";
import Ajuda              from "@screen/ajuda/ajuda";
import Exames             from "@screen/exames/Exames";

// Criando drawer
const Drawer = createDrawerNavigator()
const Stack  = createStackNavigator();

export default function Page() {
    const route  = useRoute();
    
    return (
        <Drawer.Navigator initialRouteName='HomePre' 
                          screenOptions={{ headerShown:false }}
                          drawerContent={props=><DrawerCustom {...props} />}>

            <Drawer.Screen name="HomePre" component    ={Stack_navigation}   
                                                initialParams={{userId: route.params.userId}}
                                            />
            <Drawer.Screen name="Ajuda" component = {Ajuda}  
                                        options   = {{headerShown: true}} 
                                            />
        </Drawer.Navigator>
    );
}


const Stack_navigation = () =>{
    const route = useRoute()
    return (
        <Stack.Navigator screenOptions={{ headerShown:false }}>
            <Stack.Screen name="HomeExames"   component={HomePre}   
                                        initialParams={{ userId: route.params.userID}}   />
            <Stack.Screen name="SelecaoRaioX" component={SelecaoRaioX} />
            <Stack.Screen name="Exames"       component={Exames} />
            <Stack.Screen name="RaioX"        component={RaioXClassificacao}  />


        </Stack.Navigator>
    );
}