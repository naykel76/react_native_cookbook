import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync, decrementAsync, incrementByValueAsync } from '../features/counter/counterSlice';
import Box from './ui/Box';
import Icon from './ui/Icon';

export default function CounterAsync() {
    // useSelector is a hook that allows you to extract data from the Redux
    // store state using a selector function. The selector function receives
    // the entire store state as its argument and returns the data that you
    // need from the state. If the data changes, the component will re-render.
    const countAsync = useSelector((state) => state.counter.data.count);

    // useDispatch is a hook that returns a reference to the dispatch function
    // from the Redux store. You can use it to dispatch actions to the store.
    const dispatch = useDispatch();
    return (
        <Box customStyles={{ width: "100%", maxWidth: 300 }}>
            <Text style={styles.text}>{countAsync}</Text>
            <View style={[styles.buttons, { marginTop: 8 }]}>
                <Pressable onPress={() => dispatch(incrementAsync())}>
                    <Icon name='add-circle' />
                </Pressable>
                <Pressable onPress={() => dispatch(decrementAsync())}>
                    <Icon name='remove-circle' />
                </Pressable>
            </View>
            <View style={[styles.buttons, { marginTop: 12 }]}>
                <Button title="Add By Value" onPress={() => dispatch(incrementByValueAsync(5))} />
            </View>
        </Box>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
});