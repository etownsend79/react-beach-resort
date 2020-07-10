import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

function saveToLocalStorage(state) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState)
}

function loadFromLocalStorage() {
  const serializedState = localStorage.getItem('state')
  if (serializedState === null) return undefined
  return JSON.parse(serializedState);
}

const persistedState = loadFromLocalStorage()
const store = createStore(reducers, persistedState)
store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
