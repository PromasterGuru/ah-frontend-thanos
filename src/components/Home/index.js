import React from 'react';

const Home = () => (
  <div className="jumbotron">
    <h1 className="display-4">Welcome to authors haven</h1>
    <p className="lead">Write read and learn</p>
    <hr className="my-4" />
    <div className="p-3 border border-danger">
      Example article from our backend (to test Get one Article and Like/Dislike features):
      <br />
      <h3>Just keep swimming till you see it</h3>
      <a href="/articles/12" className="btn btn-primary btn-lg">View Article</a>
    </div>
  </div>
);

export default Home;
