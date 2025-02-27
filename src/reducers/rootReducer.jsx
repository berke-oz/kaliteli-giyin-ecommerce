import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer';
import categoryReducer from './categoryReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    category: categoryReducer,
    cart: cartReducer
});

export default rootReducer;