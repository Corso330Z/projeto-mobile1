import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5
    },
    input: {
        flex: 1,
        backgroundColor: "#EDEAE8",
        height: 56,
        borderRadius: 8,
        color: "#FFF",
        marginRight: 5
    },
    buttonText: {
        fontWeight: 600,
        fontSize: 20,
        color: "#fff"
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    }
})