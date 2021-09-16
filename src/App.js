import './App.css';
import { Navbar } from './components';
import { Footer } from './components';

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
        <Footer />
      </div>
    </Router>

  );
}

export default App;
