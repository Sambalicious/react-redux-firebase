import {createStore, applyMiddleware} from 'redux';
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk';
import {getFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase'

export const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})));