import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../services/apiService';

const initialState = {
    data: { categories: [] },
    isLoading: false,
    error: null
};

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async (_, thunkAPI) => {
        try {
            const categories = await getCategories();
            return categories;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const categoriesSlice = createSlice({
    name: `categories`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

// return the categories slice from here??
// export const selectcategories = (state) => state.categories;xx 
export default categoriesSlice.reducer;
