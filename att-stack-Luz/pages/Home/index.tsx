import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NutriVida</Text>
      <Text style={styles.subtitle}>Controle suas calorias de um jeito simples</Text>

      <Button title="Adicionar Alimento" onPress={() => navigation.navigate("Adicionar")} />
      <Button title="Calorias de Hoje" onPress={() => navigation.navigate("Calorias")} />
      <Button title="Dicas de Saúde" onPress={() => navigation.navigate("Dicas")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 20 },
  title: { fontSize: 30, fontWeight: "bold" },
  subtitle: { fontSize: 16, marginBottom: 20 }
});
