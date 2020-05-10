import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// AppContainer is a necessary wrapper component for hot module reloading
import { AppContainer } from 'react-hot-loader';
import openspaceApp from './api/Redux/Reducers';
import middleware from './api/Redux/Middleware';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  openspaceApp,
  middleware
);

const render = Component => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer>
          <Component />
        </AppContainer>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => render(App));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
