import { Text, TextInput, View, TouchableOpacity, TextInputProps } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = TextInputProps&{
    placeH:string,
}

export function Input({placeH, onChangeText, onPress, value}:Props){
    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder={placeH}
            placeholderTextColor={"#fff"}
            onChangeText={onChangeText}
            value={value}
            />
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}><AntDesign name="pluscircleo" size={24} color="black"/></Text>
            </TouchableOpacity>
        </View>
    )
}