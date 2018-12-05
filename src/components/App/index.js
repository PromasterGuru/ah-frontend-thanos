import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Header from '../Header';
import ArticlePage from '../../containers/ArticlePage';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/articles/:articleId" component={ArticlePage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
