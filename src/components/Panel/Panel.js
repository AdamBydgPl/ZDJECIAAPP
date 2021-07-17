
import './Panel.css'
import {BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom'
import SiatkaZdjec from '../SiatkaZdjec'
import Zdjecie from '../Zdjecie'

function Panel()
{
    return  <article className="Panel">
              <Switch>
          <Route exact path="/Zdjecia/:id">
              <SiatkaZdjec />
          </Route>
          <Route exact path="/Zdjecie/:id">
              <Zdjecie />
              </Route>
            <Route path="/" component={() => <div><h1>Wybierz kolecje po lewej stronie</h1></div>}>
          {console.log("Switch Main")}
          </Route>

    </Switch>
        
    

    </article>
}

export default Panel