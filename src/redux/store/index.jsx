import {createStore, applyMiddleware, compose} from 'redux';
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk';
import { useFirestore} from 'redux-firestore'




export const store = createStore(rootReducer, applyMiddleware(thunk));


         