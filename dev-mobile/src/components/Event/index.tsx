import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

// Determinando a tipagem tipagem pro props
type Props = {
    name: string,
    onClick?: ()=>void
}

export function Event({name}:Props){
    return(
        <View style={styles.container}>
            {/* Esse name é a propriedade para o componente */}
            <Text style={styles.text}>{name}</Text> 
            <TouchableOpacity style={styles.button} >
            <Text style={styles.buttoText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}
