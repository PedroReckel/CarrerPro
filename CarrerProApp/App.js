import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from './src/pages/Signin';
import Signup from './src/pages/Signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }} // Ocultar o cabeçalho para a tela "Signin"
        />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}