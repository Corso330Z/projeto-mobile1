import { StyleSheet, Text, View, Image } from "react-native";

export default function Portugues() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/portugues.jpg")}
        style={{ width: "100%", height: 200, alignItems: "center" }}
      />
      <Text style={styles.title}>Português</Text>
      <Text style={styles.text}>
        A língua portuguesa, também designada português, é uma língua
        indo-europeia românica flexiva ocidental originada no galego-português
        falado no Reino da Galiza e no norte de Portugal. Com a criação do Reino
        de Portugal em 1139 e a expansão para o sul na sequência da Reconquista,
        deu-se a difusão da língua pelas terras conquistadas e, mais tarde, com
        as descobertas portuguesas, para o Brasil, África e outras partes do
        mundo.[9] O português foi usado, naquela época, não somente nas cidades
        conquistadas pelos portugueses, mas também por muitos governantes locais
        nos seus contatos com outros estrangeiros poderosos. Especialmente nessa
        altura, a língua portuguesa também influenciou várias línguas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFE5E5", // Rosa claro
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#B30000",
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    color: "#660000",
  },
});
