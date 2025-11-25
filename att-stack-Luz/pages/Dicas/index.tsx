import { View, Text, StyleSheet } from "react-native";

export default function Dicas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dicas de Saúde</Text>

      <Text style={styles.text}>• Beba ao menos 2 litros de água por dia.</Text>
      <Text style={styles.text}>• Coma mais frutas e vegetais.</Text>
      <Text style={styles.text}>• Evite frituras e açúcar em excesso.</Text>
      <Text style={styles.text}>• Durma pelo menos 7 a 8 horas por noite.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 10 }
});
