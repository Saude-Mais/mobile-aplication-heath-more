import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Janelas
import Main            from 'screen/main/main';
import Login           from 'screen/login/login';
import CadastroUsuario from 'screen/cadastro/CadrastroUsuario';
import StackNavigation from './navegacaoHome';
import ChatDoctor      from 'screen/chatdoctor/chatdoctor';

const Stack = createStackNavigator();

export default function NavegacaoPrincipal(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
                <Stack.Screen name="Main"  component={Main}  />
                <Stack.Screen name="Login" component={Login} initialParams={{ email:null }}/>
                <Stack.Screen name="Home"  component={StackNavigation} />
                <Stack.Screen name="chatbot" component={ChatDoctor} initialParams={{user:null}}/>
                <Stack.Screen name='CadastroUsuario' component={CadastroUsuario}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}