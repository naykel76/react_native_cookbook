import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: { count: 0 },
    isLoading: false,
    error: null
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.data.count += 1;
        },
        decrement: (state) => {
            state.data.count -= 1;
        },
        incrementByValue: (state, action) => {
            state.data.count += action.payload.value;
        }
    }
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;