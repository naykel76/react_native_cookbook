import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    isLoading: false,
    error: null
};

// in a real app, the fetch would be in a separate file with error handling
export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchProductsByCategory',
    async (category, thunkAPI) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const products = await response.json();
            return products;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const productsSlice = createSlice({
    name: `products`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export default productsSlice.reducer;