import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducers} from './reducers/reducers';
import App from './routers/routers';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,document.getElementById('root')
);