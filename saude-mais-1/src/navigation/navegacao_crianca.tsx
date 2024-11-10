import { useRoute } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator  } from "@react-navigation/stack";

// Componentes
import DrawerCustom      from '@components/Drawer/Drawer'

// Screens
import HomeCrianca  from "screen/homeCrianca/homeCrianca";
import Ajuda        from "screen/ajuda/ajuda";


// Criando drawer
const Drawer = createDrawerNavigator()
const Stack  = createStackNavigator();

export default function Page() {
    const route  = useRoute();
    
    return (
        <Drawer.Navigator initialRouteName='InicioCrianca' 
                          screenOptions={{ headerShown:false }}
                          drawerContent={props=><DrawerCustom {...props} />}>

            <Drawer.Screen name="InicioCrianca" component    ={Stack_navigation}   
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
            <Stack.Screen name="InicioCrianca"    component={HomeCrianca}   
                                               initialParams={{ userId: route.params.userID}}   />


        </Stack.Navigator>
    );
}