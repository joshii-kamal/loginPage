import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Home from "./components/home/Home";
// import basePage from './components/basepage/BasePage';


function ProtectedRoute({ path: path, isAuth: isAuth, component: Component, ...rest }) {
  return <Route {...rest} render={(props) => {
    if (path === "*" || path === '/') {
      if (isAuth) {
        return <Redirect to={{ pathname: '/home' }} />
      } else {
        return <Redirect to={{ pathname: '/' }} />
      }
    } else {
      if (isAuth) {
        return <Component {...props} />
      } else {
        return <Redirect to={{ pathname: '/' }} />
      }
    }
  }
  } />;
};

export default ProtectedRoute;
