import { createSlice } from '@reduxjs/toolkit';

const temperatureSlice = createSlice({
    name: 'temperature',
    initialState: {
        value: 25,
    },
    reducers: {
        up: state => {
            state.value += 1;
        },
        down: state => {
            state.value -= 1;
        },
    }
});

export const { up, down } = temperatureSlice.actions;
export default temperatureSlice.reducer;