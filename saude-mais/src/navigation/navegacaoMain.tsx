import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Janelas
import Main            from 'screen/main/main';
import Login           from 'screen/login/login';
import CadastroUsuario from 'screen/cadastro/CadrastroUsuario';
import Page            from './navegacaoHome';

type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
 };

const Stack = createStackNavigator();

export default function NavegacaoPrincipal(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
                <Stack.Screen name="Main"  component={Main}  />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Page} />
                <Stack.Screen name='CadastroUsuario' component={CadastroUsuario}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}