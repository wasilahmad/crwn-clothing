import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../redux/user/user.reducer';
import cartReducer from '../redux/cart/cart.reducer';
import directoryReducer from '../redux/directory/directory.reducer';
import shopReducer from '../redux/shop/shop.reducer';

// persist configuration
const persistConfig = {
    key: 'Root',
    storage,
    whitelist: ['cart'] // contains a string 'name' of the reducer that we wanna store in localstorage
}

// root reducer 
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});


export default persistReducer(persistConfig, rootReducer);