import {combineReducers} from 'redux';

import vehiclesReducer from './vehiclesReducer';
import cartReducer from './cartReducer';
export default combineReducers({
    data: vehiclesReducer,
    cart: cartReducer,
});