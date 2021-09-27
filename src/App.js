import './App.css';
import { Navbar , Footer} from './components/layout';
import Landing from './components/layout/home/Landing';
import Movie from './components/layout/home/Movie';

import {
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={Landing}/>
        <Route exact path='/movie/:id' component={Movie}/>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
