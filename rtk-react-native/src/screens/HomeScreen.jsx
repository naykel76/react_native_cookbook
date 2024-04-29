import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

export default function HomeScreen() {
    // useSelector is a hook that allows you to extract data from the Redux
    // store state using a selector function. The selector function receives
    // the entire store state as its argument and returns the data that you
    // need from the state. If the data changes, the component will re-render.
    const count = useSelector((state) => state.counter.value);
    
    // useDispatch is a hook that returns a reference to the dispatch function
    // from the Redux store. You can use it to dispatch actions to the store.
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <View style={styles.buttons}>
                <Button title="increment" onPress={() => dispatch(increment())} />
                <Button title="decrement" onPress={() => dispatch(decrement())} />
            </View>
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
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
    }
});