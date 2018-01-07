import { createStore } from 'redux';
import reducer from './modules';

const configureStore = initialState =>
    createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        initialState
    );

export default configureStore;
