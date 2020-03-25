import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));

function App() {
  return (
    <div className='App'>
      <Suspense
        fallback={
          <section>
            <h1>Loading...</h1>
          </section>
        }
      >
        <Router>
          <Route exact path='/' component={Home} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
