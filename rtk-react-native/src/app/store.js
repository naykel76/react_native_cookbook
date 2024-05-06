import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import categoriesSlice from '../features/categoriesSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        categories: categoriesSlice,
    },
});