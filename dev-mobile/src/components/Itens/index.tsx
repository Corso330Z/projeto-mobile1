import { View, Text } from "react-native";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
    name:string
}

export function Itens({name}:Props){
    return(
        <View style={styles.container}>
            <AntDesign name="checkcircle" size={24} color="white"/>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}