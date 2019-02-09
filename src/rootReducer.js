import { combineReducers } from 'redux';
import contadorReducer from './components/contador/reducer';

const rootReducer = combineReducers({
    contadorReducer
});

export default rootReducer;