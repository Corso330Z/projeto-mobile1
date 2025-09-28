import { ScrollView, Text, Button, View } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Input } from "./src/components/Input";
import { Itens } from "./src/components/Itens";


export default function App() {
  const [produtos, setProdutos] = useState<string[]>([]);
  const [produtoAdd, setProdutoAdd] = useState("");

  function adicionarProduto() {
    if (produtoAdd.trim() === "") return;
    setProdutos([...produtos, produtoAdd]);
    setProdutoAdd("");
  }

  function apagarItem(chave: number) {
    setProdutos(produtos.filter((_, index) => index !== chave));
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de compras</Text>
      <Input placeH="Digite o produto"
        onChangeText={e => setProdutoAdd(e)}
        onPress={adicionarProduto} value={produtoAdd} />
      <View style={styles.containerList}>
        <ScrollView>
          {produtos.length === 0 ? (
            <Text style={{ display: "flex", textAlign: "center", color: "#F2EFEB", marginTop: 150, fontSize: 20 }}>
              Não tem itens
            </Text>) : (
            produtos.map((item, index) => (
              <Itens key={index}
                chave={index}
                name={item}
                onDelete={apagarItem} 
              />
            ))
          )
          }
        </ScrollView>
      </View>
    </View>
  );
}
