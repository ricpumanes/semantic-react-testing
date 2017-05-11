import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import Home from './components/Home';
import Songs from './containers/Songs';

import 'semantic-ui-css/semantic.min.css';
import '../public/index.css';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="songs" component={Songs}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
