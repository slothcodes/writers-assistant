import { combineReducers } from 'redux';
import outLineReducer from './outLineSlice';
import PromptResultsReducer from './promptResultsSlice';

const rootReducer = combineReducers({
    outline: outLineReducer,
    promptResults: PromptResultsReducer
});

export default rootReducer;