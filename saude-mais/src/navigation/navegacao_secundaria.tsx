import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen
import Tuberculose from 'screen/exames/Tuberculose';

// Janelas
const Stack = createStackNavigator();


export default function NavegacaoPrincipal(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Tuberculose"  component={Tuberculose}  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}