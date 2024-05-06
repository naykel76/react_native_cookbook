import { Button, FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../features/categoriesSlice';
import { useEffect } from 'react';

export default function categoriesScreen() {
    const { categories } = useSelector((state) => state.categories.data);
    const dispatch = useDispatch();

    useEffect(() => {

        console.log(categories);
        dispatch(fetchCategories());
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => <Button onPress={() => {console.log('press'); }} title={item} />}
                keyExtractor={(item) => item}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#90e969',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
});

