import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import './index.css';
import reducer from './reducers';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ App } />
                <Route exact path="/todo/new" component={ App } />
                <Route exact path="/todo/:id" component={ App } />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
