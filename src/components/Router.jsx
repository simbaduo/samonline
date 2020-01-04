import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <header>SAM</header> */}
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={Page1}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
