import { StyleSheet, Text, View, Image } from "react-native";

export default function Matematica() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/matematica.jpg")}
        style={{ width: "100%", height: 200, alignItems: "center" }}
      />
      <Text style={styles.title}>Matemática</Text>
      <Text style={styles.text}>
        Matemática é uma área do conhecimento que inclui os tópicos dos números,
        fórmulas e estruturas relacionadas, formas e os espaços em que estão
        contidos, e quantidades e suas mudanças. Esses tópicos são representados
        na matemática moderna com as principais subdisciplinas da teoria dos
        números, álgebra, geometria e análise, respectivamente. No
        entanto, não há consenso entre os matemáticos sobre uma definição comum
        para a disciplina acadêmica que estudam.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E5F2FF", // Azul claro
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#0059B3",
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    color: "#003366",
  },
});
