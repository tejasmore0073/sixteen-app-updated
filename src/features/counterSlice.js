import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 10
}

const counterSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
        incrementValue: (state) => {
            state.value += 1;
        },
        decrementValue: (state) => {
            state.value -= 1;
        }
    }
});

export const {incrementValue, decrementValue} = counterSlice.actions;
export default counterSlice.reducer