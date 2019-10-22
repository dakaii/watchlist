import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import WatchList from './containers/WatchList';


export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/watchlist" component={WatchList} />
            </Switch>
        );
    }
}
