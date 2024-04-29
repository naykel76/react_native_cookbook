import { StyleSheet, Text, View } from 'react-native';

export default function ProductDetailScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Product Details Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c269e9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
});