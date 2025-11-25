import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreens() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/aprovado_1.png')}/>
      <Text style={styles.text}>O Corso passou tirando 100 na prova!</Text>
      <StatusBar style="auto" />
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
  text: {
    marginTop: 30
  }
});
