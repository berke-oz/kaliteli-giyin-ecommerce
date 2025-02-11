import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Redux Thunk'ı dahil ediyoruz
import rootReducer from './reducers'; // Reducer'ları buradan alacağız

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
