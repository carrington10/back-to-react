import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'react-devtools-extension-devlopmentOnly'
import rootReducer from './reducers'
const middleware = [thunk];
const initialState = {}

const store = createStore(rootReducer,initialState,composeWithDevTools
(applyMiddleware(...middleWare)));

export default store;
