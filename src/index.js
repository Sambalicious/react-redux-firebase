import React from 'react';
import ReactDOM from 'react-dom';
import { Provider , useSelector} from 'react-redux'
import './index.css';
import App from './App';
import { store } from './redux/store';
 import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase'
import firebase from './config/firebaseConfig'
import { createFirestoreInstance } from "redux-firestore";

const rrfConfig = {
  userProfile : "users",
  useFirestoreForProfile: true
};

const rrfProps ={
  firebase,
  config:rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};


const AuthIsLoaded = ({ children })=> {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


