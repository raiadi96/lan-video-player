// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/player/:videoId" component={VideoPlayer} />
    </Router>
  );
};

export default App;
