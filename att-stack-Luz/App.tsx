import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Adicionar from './pages/Adicionar';
import Calorias from './pages/Calorias';
import Dicas from './pages/Dicas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "NutriVida" }} />
        <Stack.Screen name="Adicionar" component={Adicionar} options={{ title: "Adicionar Alimento" }} />
        <Stack.Screen name="Calorias" component={Calorias} options={{ title: "Calorias do Dia" }} />
        <Stack.Screen name="Dicas" component={Dicas} options={{ title: "Dicas de Saúde" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
