import { StyleSheet, Text, View } from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.text}>
                Aqui você encontra conteúdos simples e diretos para revisar as principais matérias do semestre. Explore o app e aprenda de forma leve.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#ffffff'
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        marginBottom:10,
        color:'#333'
    },
    text:{
        fontSize:16,
        color:'#555'
    }
});
