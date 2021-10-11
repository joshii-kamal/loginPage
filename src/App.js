import React from 'react';
import './App.css';
import BasePage from "./component/BasePage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';  
import Home from "./component/Home";
import { useDataLayerValue } from './reducer/DataLayer';
import ProtectedRoute from './ProtectedRoute';



function App() {
  const [{ isLoggedIn }] = useDataLayerValue();
  return (
    <BrowserRouter>
        <Route exact path="/" component={BasePage} />
      <Switch>
          <ProtectedRoute exact path="/" component={BasePage} isAuth={isLoggedIn} />
          <ProtectedRoute path="/home" component={Home} isAuth={isLoggedIn} />
          <ProtectedRoute path="*" component={BasePage} isAuth={isLoggedIn} />
      </Switch>
    </BrowserRouter >  
  );
}

export default App;
