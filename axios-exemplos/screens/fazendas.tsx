import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Fazendas {
    id: number;
    nome: string;
    endereco: string;
    municipio: string;
    uf: string;
    proprietarioId: number;
    proprietario: string;
}

export default function FazendasScreens() {
    const [fazendas, setFazendas] = useState<Fazendas[]>([]);
    async function buscarFazendas() {
        try {
            await axios.get('https://apivacinacao.dev.vilhena.ifro.edu.br/fazendas').then((resposta) => {
            setFazendas(resposta.data);
        })
        } catch (error) {
            console.log(error)
        }
    }
    
    // useEffect(() => {
    //     buscarFazendas();
    // });

  return (
    <ScrollView>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title='Buscar Fazendas' onPress={buscarFazendas}/>
      {fazendas.length === 0 ? (<Text>Lista Vazia</Text>) :
      (fazendas.map((item, index) => (
        <View key={index} style={styles.card}>
            <Text>Fazenda: {item.nome}</Text>
            <Text>Proprietário(a): {item.proprietario}</Text>
            <Text>Endereço: {item.endereco}</Text>
        </View>)
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#DfDfDf',
    marginBottom: 30,
},
});
