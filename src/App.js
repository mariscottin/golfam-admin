import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/shared/Navbar/Header';
import Sidebar from './components/shared/Navbar/Sidebar';
import NewTournament from './components/torneos/pages/NewTournament';
import CreateTournament from './components/torneos/pages/CreateTournament';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <Switch>
          
          <Route path="/torneos/crear" exact>
            <NewTournament />
          </Route>
          <Route path="/torneos/crear/nuevo" exact>
            <CreateTournament />
          </Route>
         
        </Switch>
      </div>

    </Router>
  );
}

export default App;
