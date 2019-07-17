import React from '../../node_modules/react';
import { Route, Switch, Redirect } from '../../node_modules/react-router-dom';
import routes from '../routes';
import Nav from './Nav/Nav';

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default App;
