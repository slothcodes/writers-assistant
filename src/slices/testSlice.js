import {createSlice} from '@reduxjs/toolkit';

const testSlice = createSlice({
    name: 'test',
    initialState: {
        text: 'hello test world'
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        }

    }
});

export const {setText} = testSlice.actions;
export default testSlice.reducer;