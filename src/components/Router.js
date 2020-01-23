import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Food from './Food';

const Router = () => (
    <BrowserRouter>
        <Route path = '/' component={App} />
        <Route path = '/food' component={Food}/>
    </BrowserRouter>
)
