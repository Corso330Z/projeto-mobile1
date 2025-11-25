import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Home from "./pages/Home/";
import Portugues from "./pages/Portugues/";
import Matematica from "./pages/Matematica/";
import Quimica from "./pages/Quimica/";
import Fisica from "./pages/Fisica/";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={"Home"} component={Home} />
        <Drawer.Screen name={"Português"} component={Portugues} />
        <Drawer.Screen name={"Matemática"} component={Matematica} />
        <Drawer.Screen name={"Química"}component={Quimica} />
        <Drawer.Screen name={"Física "}component={Fisica} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
