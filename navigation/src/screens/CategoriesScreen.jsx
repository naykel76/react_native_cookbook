import { StyleSheet, Text, View } from 'react-native';

export default function CategoriesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Categories (Home) Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#69a4e9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
});