//Prova do Corso - 3°A Informática
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreens from "./screens/home";
import InputScreens from "./screens/input";
import ProprietariosScreens from "./screens/proprietarios";

import Entypo from "@expo/vector-icons/Entypo";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreens} options={{drawerIcon:() => <Entypo name='home' size={24} color='black'/>}}/>
        <Drawer.Screen name="Multiplicação" component={InputScreens}/>
        <Drawer.Screen name="Proprietários" component={ProprietariosScreens}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
