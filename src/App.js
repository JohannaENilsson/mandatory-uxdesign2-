import React, { Suspense, useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './styling/App.css';
import './styling/Nav.css';

import Header from './components/Header';
import Navigation from './components/Navigation';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Stats = React.lazy(() => import('./components/Stats'));

function App() {
  const [openMenu, setOpenMenu] = useState(false);

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
          <Header onClickMenu={() => setOpenMenu(true)} />
          {openMenu ? (
            <Navigation
              OnClickMask={() => setOpenMenu(false)}
              isOpen={openMenu}
            />
          ) : null}

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/stats' component={Stats} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
