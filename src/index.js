import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import App from './containers/App';
import './index.css';
import MovieReducer from './reducers/MovieReducer';
import Sagas from './sagas/Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    MovieReducer,
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(Sagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
