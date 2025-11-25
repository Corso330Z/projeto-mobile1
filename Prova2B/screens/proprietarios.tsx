import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Proprietarios {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
}

export default function ProprietariosScreens() {
    const [proprietarios, setProprietarios] = useState<Proprietarios[]>([]);
    async function buscarPropietarios() {
        try {
            await axios.get('https://apivacinacao.dev.vilhena.ifro.edu.br/proprietarios').then((resposta) => {
            setProprietarios(resposta.data);
        })
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     buscarPropietarios();
    // });

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title='Buscar Proprietarios' onPress={buscarPropietarios}/>
      </View>
      <FlatList 
            data={proprietarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Text>Proprietário(a): {item.nome}</Text>
                    <Text>CPF: {item.cpf}</Text>
                    <Text>Telefone: {item.telefone}</Text>
                    <Text>Email: {item.email}</Text>
                </View>
            
            )}
            ListEmptyComponent={<Text>Lista Vazia</Text>}
        />
    </View>
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
    marginTop:10,
    marginBottom: 10
  },
  button: {
    marginTop:30,
    marginBottom: 20
  }
});
