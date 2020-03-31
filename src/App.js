import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import './styling/App.css';
import './styling/Nav.css';


import Nav from './components/Nav';
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Stats = React.lazy(() => import('./components/Stats'));

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
          <Route path='/stats' component={Stats}/>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
