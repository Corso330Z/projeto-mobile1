import { ScrollView, Text, View, TouchableOpacity, Alert, Button } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Input } from "./src/components/Input";
// import { Itens } from "./src/components/Itens";
// import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [nomeDono, setNomeDono] = useState("");
  const [tipoDono, setTipoDono] = useState("");
  const [larguraAdd, setLargura] = useState("");
  const [compriAdd, setCompri] = useState("");
  const [areaTerreno, setAreaTerreno] = useState(0);

  function adicionarImovel() {
    if (nomeDono.trim() === "" || tipoDono.trim() === "" || larguraAdd.trim() === "" || compriAdd.trim() === "") {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    if (nomeDono || tipoDono) {
      setNome(nomeDono)
      setTipo(tipoDono)
    } else {
      return Error
    }

    const larguraNumero = parseFloat(larguraAdd.replace(",", "."));
    if (isNaN(larguraNumero)) {
      Alert.alert("Erro", "Digite a largura do terreno em metros!");
      return;
    }

    const compriNumero = parseFloat(compriAdd.replace(",", "."));
    if (isNaN(compriNumero)) {
      Alert.alert("Erro", "Digite o comprimento do terreno em metros!");
      return;
    }

    const calcularTerreno = larguraNumero * compriNumero;

    setNomeDono("");
    setTipoDono("");
    setLargura("");
    setCompri("");
    setAreaTerreno(calcularTerreno)
    
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de imóvel</Text>
      <View style={{ flexDirection: "column", alignItems: "flex-start", gap: 10, marginBottom: 30, marginTop: 20  }}>
        <Input
          placeH="Nome"
          onChangeText={setNomeDono}
          value={nomeDono}
          style={{ flex: 2 }}
        />
        <Input
          placeH="Tipo"
          onChangeText={setTipoDono}
          value={tipoDono}
          style={{ flex: 1 }}
        />
        <Input
          placeH="Largura"
          onChangeText={setLargura}
          value={larguraAdd}
          keyboardType="numeric"
          style={{ flex: 1 }}
        />
        <Input
          placeH="Comprimento"
          onChangeText={setCompri}
          value={compriAdd}
          keyboardType="numeric"
          style={{ flex: 1 }}
        />

        <TouchableOpacity style={styles.botao} onPress={adicionarImovel}><Text style={styles.botaoTexto}>CALCULAR TERRENO</Text></TouchableOpacity>

      </View>

      {/* Lista */}
      <View style={styles.container2}>
        <ScrollView style={styles.scroll}>
          <Text>Nome proprietário: {nome}</Text>
          <Text>Tipo de imóvel: {tipo}</Text>
          <Text>Tamanho do terreno: {areaTerreno}</Text>
        </ScrollView>
      </View>

    </View>
  );
}
