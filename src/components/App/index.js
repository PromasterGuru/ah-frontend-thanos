import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from '../Home';
import LoginPage from '../../containers/LoginPage';
import Header from '../Header';
import { Footer } from '../Footer';
import SignUpPageConnected from '../../containers/SignUpPage';
import Profile from '../../containers/profiles/profiles';
import EditProfilePage from '../../containers/profiles/editProfile';

library.add(faSearch);
const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPageConnected} />
        <Route path="/profiles/:username" component={Profile} />
        <Route path="/profile/:username" component={EditProfilePage} />
        <Footer />
      </Switch>
    </div>
  </BrowserRouter>
);


export default App;
