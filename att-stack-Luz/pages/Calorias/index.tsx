import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Calorias() {
  const [lista, setLista] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const dados = await AsyncStorage.getItem("alimentos");
    const itens = dados ? JSON.parse(dados) : [];

    setLista(itens);

    const soma = itens.reduce((acc: number, item: any) => acc + item.calorias, 0);
    setTotal(soma);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calorias de Hoje</Text>
      <Text style={styles.total}>Total consumido: {total} kcal</Text>

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.nome} — {item.calorias} kcal
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  total: { fontSize: 20, marginBottom: 20 },
  item: { fontSize: 18, paddingVertical: 5, borderBottomWidth: 1, borderColor: "#ddd" }
});
