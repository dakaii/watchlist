import React, { Component, Fragment } from 'react';
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Routes from '../routes';
import MovieReducer from '../reducers/MovieReducer';
import Sagas from '../sagas/Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  MovieReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(Sagas);

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <HashRouter>
            <Routes />
          </HashRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
