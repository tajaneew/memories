import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './App';
import './index.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    // Add other enhancers here, like Redux DevTools Extension
  )
);

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
