import { useRoute } from "@react-navigation/native";

import { createStackNavigator  } from "@react-navigation/stack";

// Screens
import HomePre            from "@screen/homePre/homePre";
import RaioXClassificacao from "@screen/exames/RaioxClassificação";
import Historico          from "@screen/exames/Historico";

import Exames             from "@screen/exames/Exames";

// Criando drawer
const Stack  = createStackNavigator();

const StackNavigation = () =>{
    const route = useRoute();
    return (
        <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName="HomeExames">
            <Stack.Screen name="HomeExames"   component={HomePre}  initialParams={{ userID: route.params.userID}}   />
            <Stack.Screen name="Exames"       component={Exames}   initialParams={{ userID: route.params.userID}}/>
            <Stack.Screen name="RaioX"        component={RaioXClassificacao}  />
            <Stack.Screen name="Historico"    component={Historico}           />
        </Stack.Navigator>
    );
}
export default StackNavigation;