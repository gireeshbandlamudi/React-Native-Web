import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import LoginScreen from './components/loginScreen/loginScreen';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={LoginScreen} exact/>
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </HashRouter>
  );
}

export default App;
