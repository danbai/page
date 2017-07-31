import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from '../components/App.js';
import Welcome from '../components/Welcome.js';
import Collections from '../components/Collections.js';
import Game from '../components/Game.js';
import Aside from '../components/Aside.js';
import Headlines from '../components/Headlines.js';
import GameStore from '../components/GameStore.js';
import '../css/style.scss';

const routes = (
    <Router history={ hashHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Welcome } />
            <Route path="collections" component={ Collections } />
            <Route path="game" component={ Game } />
            <Route path="aside" component={ Aside } />
            <Route path="headlines" component={ Headlines } />
            <Route path="game_store" component={ GameStore } />
        </Route>
    </Router>
);

render(routes, document.getElementById('root'));