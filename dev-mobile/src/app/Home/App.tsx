import { Alert, Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";
import {Event} from "../../components/Event"

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome Evento</Text>
            <View style={styles.form}>
            <TextInput style={styles.input} placeholder='Digite o evento' placeholderTextColor={'#fff'}></TextInput>
            <TouchableOpacity  style={styles.button} onPress={()=>{Alert.alert("Teste Botão")}}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            </View>
            {/* Esse name é a propriedade que nós criamos para poder dar nome ao evento, mas precisamos chamar ela lá em Event */}
            <Event name = "Evento Novo"/>
            <Event name = "Evento Cancelado"/>
            {/* <Event/> - Caso você chame o event sem usar a propriedade que definimos, vai dar erro falando que não está sendo usada*/}
        </View>
        
    )
}