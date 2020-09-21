import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";

import { PersistGate } from 'redux-persist/integration/react'

import App from './App';

import { store, persistor } from '../../store/store';


function NoMatch() {
  return (
    <div>
        Sayfa Bulunamadı
    </div>
  );
}


ReactDOM.render(
  <Provider store={ store }>
      <PersistGate loading={null} persistor={ persistor }>
        <Router basename={''} >
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="*"><NoMatch /></Route>
          </Switch>
        </Router>
      </PersistGate>
  </Provider>,
  document.getElementById('app')
);
