import { StyleSheet, Text, View, Button, TextInput, TextInputProps, StyleProp, ViewStyle, Alert, } from 'react-native';
import { useState } from 'react';
import React from "react";

type Props = TextInputProps & {
    placeH: string;
    style?: StyleProp<ViewStyle>;
  };

export default function InputScreens() {
    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    const [saveInput2, setSaveInput2] = useState("");
    const [conta, setConta] = useState(0);


    function imprimir() {
        if (input.trim() === "" || input2.trim() === "") {
            Alert.alert("Erro", "Preencha todos os campos!");
            return;
          }

        const num1 = parseFloat(input.replace(",", "."));
          if (isNaN(num1)) {
            Alert.alert("Erro", "Digite um número!");
            return;
          }
      
        const num2 = parseFloat(input2.replace(",", "."));
          if (isNaN(num2)) {
            Alert.alert("Erro", "Digite um número!");
            return;
          }
      
        const continha = num1 * num2;
      
          setInput("");
          setInput2("");
          setConta(continha)
    };

    // useEffect(() => {
    //     buscarFazendas();
    // });

    return (
        <View style={styles.container}>
            <View style={styles.popup}>
                <Text>Fazendo multiplicações básicas!</Text>
                <View>
                <TextInput
                    placeholder="1° número"
                    value={input}
                    onChangeText={setInput}
                    keyboardType="numeric"
                />

                <TextInput
                    placeholder="2° número"
                    keyboardType="numeric"
                    value={input2}
                    onChangeText={setInput2}
                />
                </View>
                <Text>Resultado: {conta}</Text>
                <Button title="Calcular" onPress={imprimir} />
            </View>


      </View>
      );

    };

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
    popup: {
        width: 300,
        height: 250,
        borderRadius: 25,
        backgroundColor: "lightgreen",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,

    }
});
