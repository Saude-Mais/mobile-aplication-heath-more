import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Janelas
import Main            from 'screen/main/main';
import Login           from 'screen/login/login';
import CadastroUsuario from 'screen/cadastro/CadrastroUsuario';
import SelecaoExames   from 'screen/selecaoExames/SelecionarExames';
import Tuberculose     from 'screen/exames/Tuberculose';

const Stack = createStackNavigator();

export default function NavegacaoPrincipal(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
                <Stack.Screen name="Main"  component={Main}  />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name='CadastroUsuario' component={CadastroUsuario}/>
                <Stack.Screen name="SelecaoExame"  component={SelecaoExames}  />
                <Stack.Screen name="Tuberculose"  component={Tuberculose}  />

            </Stack.Navigator>
        </NavigationContainer>
    );
}