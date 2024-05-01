import { StyleSheet, View } from 'react-native';

export default function Box({ children, customStyles }) {
    return (
        <View style={[styles.box, customStyles]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
    }
});
