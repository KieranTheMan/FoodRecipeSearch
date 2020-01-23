import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Food from './Food';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={App} exact/>
            <Route path='/food/:id' component={Food}/>
        </Switch>
    </BrowserRouter>
);

export default Router;