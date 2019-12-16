import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
//why cant i import the photos here???

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <a href="/">
            <img src={'./images/samlogowhite.jpg'} className="headerLogo" />
          </a>
          <ul className="topNav">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Services">SERVICES</Link>
            </li>
            <li>
              <Link to="/Cars">VEHICLES</Link>
            </li>
            <li>
              <Link to="/Specials">SPECIALS</Link>
            </li>
            <li>
              <Link to="/Appointments">APPOINTMENTS</Link>
            </li>
            <li>
              <Link to="/About Us">ABOUT US</Link>
            </li>
            <li>
              <Link to="/Reviews">REVIEWS</Link>
            </li>
            <li>
              <Link to="/Directions">DIRECTIONS</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        {/* <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route path="*" component={NotFound}></Route> */}
      </Switch>
    </Router>
  )
}

export default App
