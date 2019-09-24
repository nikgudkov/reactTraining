import React from 'react';
import {render} from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'
import thunk from 'redux-thunk';
import Root from './components/Root';
import combineReducers from './reducers';
import * as serviceWorker from './serviceWorker';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    combineReducers,
    composeWithDevTools(
        applyMiddleware(
            thunk, // lets us dispatch() functions
        ))
)

const rootEl = document.getElementById('root');

render(
    <Router>
        <Root store={store}/>
    </Router>,
    rootEl
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
