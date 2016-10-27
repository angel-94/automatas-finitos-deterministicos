import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router'
import HomeAFD from './components/HomeAFD';
import EntradasAFD from './components/EntradasAFD';

// Render the main component into the dom
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={HomeAFD}>
      <Route path="afd" component={EntradasAFD}/>
    </Route>
  </Router>,
  document.getElementById('aplicacion_afd')
);
