import { Button, FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsByCategory } from '../features/productsSlice';
import { fetchCategories } from '../features/categoriesSlice';

export default function categoriesScreen() {
    const { categories } = useSelector((state) => state.categories.data);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        console.log(products);
    }, [products]);

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 12 }}>
                <FlatList
                    data={categories}
                    renderItem={({ item }) => <Button onPress={() => dispatch(fetchProductsByCategory(item))} title={item} />}
                    keyExtractor={(item) => item}
                />

                <View style={{ marginTop: 12 }}>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => <Button onPress={() => console.log('hey')} title={item} />}
                        // renderItem={({ item }) => <Button onPress={() => dispatch(fetchProductById(item.id))} title={item} />}
                        keyExtractor={(item) => item}
                    />

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#90e969',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 16,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
});

