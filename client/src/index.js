import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { reducer } from './store/reducers/reducer';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
