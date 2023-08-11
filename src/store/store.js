import {configureStore} from '@reduxjs/toolkit'
import outlinePromptResultsReducer from '../slices/testSlice'

const store = configureStore({
    reducer: {
        outlinePromptResults: outlinePromptResultsReducer
    }
});

export default store;