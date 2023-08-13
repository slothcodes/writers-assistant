import {configureStore} from '@reduxjs/toolkit'
import outlinePromptResultsReducer from '../slices/promptResultsSlice'
import rootReducer from '../slices/rootReducer';

const store = configureStore({
    reducer: rootReducer
});

export default store;