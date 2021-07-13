import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './Views/Resume';
import Projects from './Views/Projects';

const App = () => {
  return (
    <div id="App" className="App">
      <Router>
        <Switch>
          <Route
            path={['/', '/home']}
            exact
            render={()=> (
              <Resume />
            )}
          />
          <Route
            path={'/projects'}
            exact
            render={()=> (
              <Projects />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
