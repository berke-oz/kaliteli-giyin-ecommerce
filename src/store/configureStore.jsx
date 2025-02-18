import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk, logger))
    );
    return store;
};

export default configureStore;