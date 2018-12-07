import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from '../Home';
import LoginPage from '../../containers/LoginPage';
import Header from '../Header';
import { Footer } from '../Footer';
import SignUpPageConnected from '../../containers/SignUpPage';
import Comments from '../../containers/comments';

library.add(faSearch);

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPageConnected} />
      <Route path="/comments" component={Comments} />
      <Footer />
    </div>
  </BrowserRouter>
);


export default App;
