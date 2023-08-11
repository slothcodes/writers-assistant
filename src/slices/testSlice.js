import {createSlice} from '@reduxjs/toolkit';

const outlinePromptResults = createSlice({
    name: 'outlinePromptResults',
    initialState: {
        results: ['hello test world']
    },
    reducers: {
        setText: (state, action) => {
            state.results = action.payload;
        }

    }
});

export const {setText} = outlinePromptResults.actions;
export default outlinePromptResults.reducer;