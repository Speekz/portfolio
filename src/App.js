import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './Views/Resume';

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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
