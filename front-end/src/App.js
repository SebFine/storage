import React from 'react';
import LoginPage from './components/LoginPage'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import userReducer from './redux/userReducers'
import './App.css';

const store = createStore(userReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

function App() {
  return (
    <Provider store={store}>
      <LoginPage/>
    </Provider>
  );
}

export default App;
