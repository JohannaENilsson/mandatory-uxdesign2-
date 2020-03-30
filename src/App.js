import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

import './styling/App.css';
import './styling/PopUp.css';

import Nav from './components/Nav';
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
          
        <Nav/>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About}/>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
