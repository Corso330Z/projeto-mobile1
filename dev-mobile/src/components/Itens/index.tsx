import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";

type Props = {
  chave: number;
  name: string;
  onDelete: (chave: number) => void;
};

export function Itens({ chave, name, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <AntDesign
        name="check-circle"
        size={24}
        color="#F2EFEB"
        onPress={() => onDelete(chave)}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
