import { StyleSheet, Text, View } from 'react-native';

export default function CartScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cart Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#69e9b2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
});