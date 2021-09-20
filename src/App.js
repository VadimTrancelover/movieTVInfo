import './App.css';
import { Navbar , Footer} from './components/layout';
import Landing from './components/layout/home/Landing';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Landing />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
