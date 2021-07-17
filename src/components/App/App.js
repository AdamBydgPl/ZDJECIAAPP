import Naglowek from '../Naglowek';
import Nawigacja from '../Nawigacja';
import Panel from '../Panel';
import Stopka from '../Stopka';
import {BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Naglowek />
        <section className="Srodek">
          <Nawigacja />
          
          <Panel />
    
        </section>
      <Stopka />
    </div>

    </Router>
  );
}

export default App;
