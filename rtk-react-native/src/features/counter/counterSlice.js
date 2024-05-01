import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: { count: 0 },
    isLoading: false,
    error: null
};

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async () => {
        const amount = 1;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);
export const decrementAsync = createAsyncThunk(
    'counter/decrementAsync',
    async () => {
        const amount = 1;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

export const incrementByValueAsync = createAsyncThunk(
    'counter/incrementByValueAsync',
    async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, () => {
                console.log('incrementAsync.pending');
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.data.count += action.payload;
            })
            .addCase(incrementAsync.rejected, () => {
                console.error('incrementAsync.rejected');
            });
        builder
            .addCase(decrementAsync.pending, () => {
                console.log('decrementAsync.pending');
            })
            .addCase(decrementAsync.fulfilled, (state, action) => {
                state.data.count += action.payload;
            })
            .addCase(decrementAsync.rejected, () => {
                console.error('decrementAsync.rejected');
            });
        builder
            .addCase(incrementByValueAsync.pending, () => {
                console.log('incrementByValueAsync.pending');
            })
            .addCase(incrementByValueAsync.fulfilled, (state, action) => {
                state.data.count += action.payload;
            })
            .addCase(incrementByValueAsync.rejected, () => {
                console.error('incrementByValueAsync.rejected');
            });
    }
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;