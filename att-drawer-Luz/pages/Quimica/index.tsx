import { StyleSheet, Text, View, Image } from "react-native";

export default function Quimica() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/quimica.jpg")}
        style={{ width: "100%", height: 200, alignItems: "center" }}
      />
      <Text style={styles.title}>Química</Text>
      <Text style={styles.text}>
        Química é o estudo científico das propriedades e do comportamento da
        matéria. É uma ciência física dentro das ciências naturais que estuda os
        elementos químicos que constituem a matéria e os compostos feitos de
        átomos, moléculas e íons: sua composição, estrutura, propriedades,
        comportamento e as mudanças que sofrem durante as reações com outras
        substâncias. A química também aborda a natureza das ligações químicas em
        compostos químicos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E8FFE5",
        display: "flex",
    flexDirection: "column", 
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0F7A00",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#0E4000",
    textAlign: "justify",
  },
});
