import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import categoriesSlice from '../features/categoriesSlice';
import productsSlice from '../features/productsSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        categories: categoriesSlice,
        products: productsSlice,
    },
});