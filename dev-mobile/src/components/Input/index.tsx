import { View, TextInput, TouchableOpacity, TextInputProps } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from "./styles"

type Props = TextInputProps & {
  placeH: string,
  onPress?: () => void
}

export function Input({ placeH, onChangeText, onPress, value }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeH}
        placeholderTextColor={"#888C81"}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="plus-circle" size={28} color="#888C81" />
      </TouchableOpacity>
    </View>
  )
}
