import { FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseLayout from '../components/layouts/BaseLayout';
import ProductItem from '../components/Product/ProductItem';
import { fetchProductsByCategory } from '../features/product/productsSlice';

export default function ProductsScreen({ route }) {

    const { data } = useSelector(state => state.products);

    const dispatch = useDispatch();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        let category = route.params?.category;
        dispatch(fetchProductsByCategory(category));
        setCategory(category);
    }, []);

    return (
        <BaseLayout useScrollView={false} title={category}>
            <FlatList
                data={data[category]}
                renderItem={({ item }) => <ProductItem item={item} />}
                keyExtractor={item => item.id}
            />
        </BaseLayout>
    );
}