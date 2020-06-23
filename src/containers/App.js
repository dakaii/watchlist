import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { PrivateRoute } from '../components/PrivateRoute';
import reducer from '../reducers/rootReducer';
import Sagas from '../sagas/Sagas';
import { Dashboard } from './Dashboard';
import { Landing } from './Landing';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';

const isDevMode =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    isDevMode
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducer, enhancer);

sagaMiddleware.run(Sagas);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#07C',
        },
        secondary: {
            main: '#E33E7F',
        },
    },
});
export const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={LogIn} />
                        <PrivateRoute
                            exact
                            path="/dashboard"
                            component={Dashboard}
                        />
                    </Switch>
                </HashRouter>
            </Provider>
        </MuiThemeProvider>
    );
};
