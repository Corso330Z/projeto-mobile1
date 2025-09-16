import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { styles } from "./styles";
import { Input } from "../../components/Input"
import { Itens } from "../../components/Itens"

export default function App() {
    const [list, setList] = useState<string[]>([])
    const [listName, setListName] = useState('')

    function handleAdd(){
        setList(prevState => [...prevState, listName])
        setListName("")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lista de compras</Text>
            <Input placeH="Digite o produto"
            onChangeText={e => setListName(e)}
            onPress={handleAdd}
            value={listName}
            />
            <View style={styles.area}>
            <ScrollView>
                {
                    list.map(item=>(
                        <Itens
                        key={item}
                        name={item}/>
                    ))
                }
            </ScrollView>
            </View>
        </View>
    )
}