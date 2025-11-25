import { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Adicionar() {
  const [nome, setNome] = useState("");
  const [cal, setCal] = useState("");

  async function salvar() {
    if (!nome || !cal) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const item = { nome, calorias: Number(cal) };

    // Carrega lista atual
    const lista = await AsyncStorage.getItem("alimentos");
    const alimentos = lista ? JSON.parse(lista) : [];

    alimentos.push(item);

    await AsyncStorage.setItem("alimentos", JSON.stringify(alimentos));

    Alert.alert("Sucesso", "Alimento salvo com sucesso!");

    setNome("");
    setCal("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Alimento</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do alimento"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Calorias"
        keyboardType="numeric"
        value={cal}
        onChangeText={setCal}
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: "#aaa",
    padding: 10, borderRadius: 5, marginBottom: 15
  }
});
