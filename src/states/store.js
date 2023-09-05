import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/index';

export default configureStore ({
    reducer: {
        user: userReducer,
    }
}, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());