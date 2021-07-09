import Naglowek from '../Naglowek';
import Nawigacja from '../Nawigacja';
import Panel from '../Panel';
import Stopka from '../Stopka';

import './App.css';

function App() {
  return (
    <div className="App">
      <Naglowek />
        <section className="Srodek">
          <Nawigacja />
          <Panel />
        </section>      
      <Stopka />
    </div>
  );
}

export default App;
