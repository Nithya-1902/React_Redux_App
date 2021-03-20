import { CakeReducer } from './CakeReducer';
import { IceCreamReducer } from './IceCreamReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    iceCream: IceCreamReducer,
    cake: CakeReducer
});