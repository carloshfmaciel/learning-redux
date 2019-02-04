import { combineReducers } from 'react';
import ContadorReducer from './components/contador/reducer';

const rootReducer = combineReducers({
    ContadorReducer: ContadorReducer, 
});

export default rootReducer;