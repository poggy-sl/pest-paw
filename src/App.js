import Header from './Header.js';
import Main from './Main.js';
import Voting from './Voting.js';
import Gallery from './Gallery.js';
import Breeds from './Breeds.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <main className="home-page">
      <Router>
        < Header / >
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/voting' component={Voting}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/breeds' component={Breeds}/>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
