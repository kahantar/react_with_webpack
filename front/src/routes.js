import { Switch, Route } from 'react-router-dom';
import Home from './home';
import React from 'react';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
    </Switch>
)

export default Routes;