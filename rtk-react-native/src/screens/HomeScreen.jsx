import { StyleSheet, Text, View } from 'react-native';
import Counter from '../Components/Counter';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Simple Counter</Text>
            <Counter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#69a4e9',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title:{
        marginBottom: 8,
        fontSize: 24,
    }
});